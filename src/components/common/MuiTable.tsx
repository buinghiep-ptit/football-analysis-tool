import {
  Box,
  Icon,
  IconButton,
  Skeleton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableColumn } from 'models/common'
import * as React from 'react'
import { useAppStore } from 'store'

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    // background-color: #f1f1f1;
  }
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  :hover {
    background-color: black;
  }
`

const StyledTableCell = styled(TableCell)(() => {
  return {
    [`&.${tableCellClasses.head}`]: {
      color: '#ADB5BD',
      // fontSize: 14,
      fontWeight: 500,
    },
    [`&.${tableCellClasses.body}`]: {
      // fontSize: 14,
      color: '#F8F9FA',
      fontWeight: 400,
    },
  }
})

type MuiPagingTableProps<T extends Record<string, any>> = {
  columns: readonly TableColumn<keyof T | 'action' | 'order' | 'something'>[]
  rows: T[]
  maxHeight?: number | null
  onClickRow?: (cell: any, row: any) => void
  isFetching: boolean
  error?: { message?: string } | undefined | null
  rowsPerPage?: number
  page?: number
  actionKeys?: string[]
  actions?: {
    type?: 0 | 1 // 0: default with icon, 1: selection
    icon?: string
    tooltip?: string
    color?:
      | 'inherit'
      | 'action'
      | 'disabled'
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
    onClick?: (col: any, row?: any) => void
    contrastIcon?: {
      icon?: React.ReactElement
      tooltip?: string
    }
    disableKey?: string
    disableActions?: (key?: number) => boolean
  }[]
  setSelectedItems?: (items: readonly T[]) => void
  multipleSelect?: boolean
}

export default function MuiTable<T extends Record<string, any>>({
  columns,
  rows,
  maxHeight,
  onClickRow,
  isFetching,
  error,
  rowsPerPage = 20,
  page = 0,
  actionKeys = ['status'],
  actions = [],
  setSelectedItems,
  multipleSelect = false,
}: MuiPagingTableProps<T>) {
  const scale = useAppStore(state => state.scale)

  const memoizedData = React.useMemo(() => rows, [rows])
  const memoizedColumns = React.useMemo(() => columns, [columns])
  const skeletons = Array.from({ length: 10 }, (x, i) => i)
  const noDataFound =
    !isFetching && (!memoizedData || !(memoizedData as T[]).length || error)

  const cellFormatter = (cell: any, row: any, value: any) => {
    if (cell.media) {
      return cell.media(value)
    }
    if (cell.status) {
      return cell.status(value)
    }
    if (cell.action) {
      return cell.action(
        value ? value : row[actionKeys[1]] ?? row[actionKeys[0]],
      )
    }
    if (cell.link) {
      return cell.link(value)
    }
    return cell.format ? cell.format(value) : value
  }

  const [selected, setSelected] = React.useState<readonly T[]>([])

  const handleClick = (event: React.MouseEvent<unknown>, row: T) => {
    const selectedIndex = selected.findIndex(s => s.id === row.id)
    let newSelected: readonly T[] = []

    if (selectedIndex === -1) {
      if (multipleSelect) newSelected = newSelected.concat(selected, row)
      else newSelected = newSelected.concat([], row)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    setSelectedItems && setSelectedItems(newSelected)
    setSelected(newSelected)
  }

  const isSelected = (row: T) => selected.findIndex(s => s.id === row.id) !== -1

  return (
    <>
      <TableContainer
        sx={{
          maxHeight: maxHeight ?? null,
          height: '100%',
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          size="medium"
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: '1px solid #495057',
            },
          }}
        >
          {!isFetching && (
            <TableHead>
              <TableRow>
                {columns.map((column, idx) => (
                  <StyledTableCell
                    key={idx}
                    align={column.align ?? 'center'}
                    sx={{
                      fontSize: 14 * scale,
                      minWidth: (column.minWidth || 0) * scale,
                      maxWidth: (column.maxWidth || 0) * scale ?? null,
                      width: (column.width || 0) * scale ?? null,
                      px: 1 * scale,
                      pr: idx === columns.length - 1 ? 2 * scale : 1 * scale,
                      py: 1.5 * scale,
                      bgcolor: '#343A40',
                      ...column.sticky,
                    }}
                  >
                    <span>{column.label}</span>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {!isFetching ? (
              memoizedData.map((row, index) => {
                const isItemSelected = isSelected(row)

                return (
                  <StyledTableRow
                    hover
                    onClick={event => handleClick(event, row)}
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{
                      '&.MuiTableRow-hover': {
                        '&:hover': {
                          backgroundColor: '#292E33',
                        },

                        '&.Mui-selected': { backgroundColor: '#292E33' },
                      },
                    }}
                  >
                    {memoizedColumns.map((column, idx) => {
                      const value =
                        idx === 0
                          ? page * rowsPerPage + index + 1
                          : row[column.id]
                      return (
                        <StyledTableCell
                          key={idx}
                          align={column.align}
                          onClick={() => onClickRow?.(column, row)}
                          sx={{
                            fontSize: 14 * scale,
                            ...column.sticky,
                            minWidth: (column.minWidth || 0) * scale,
                            maxWidth: (column.maxWidth || 0) * scale ?? null,
                            width: (column.width || 0) * scale ?? null,
                            px: 1 * scale,
                            pl: idx === 0 ? 2 * scale : 1 * scale,
                            pr:
                              idx === columns.length - 1
                                ? 2 * scale
                                : 1 * scale,
                            py: 1.5 * scale,
                            cursor:
                              column.action || column.link
                                ? 'pointer'
                                : 'default',
                            zIndex: 1,
                          }}
                        >
                          <span
                            className=""
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: '1',
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {column.id === 'actions' ? (
                              <Stack
                                flexDirection={'row'}
                                justifyContent="left"
                                gap={1.25 * scale}
                              >
                                {actions.map((action, index) => {
                                  if (action.type) {
                                    return (
                                      <Tooltip
                                        key={index}
                                        arrow
                                        title={
                                          row.isLinked
                                            ? !isItemSelected
                                              ? 'Bỏ thêm'
                                              : 'Thêm'
                                            : !isItemSelected
                                            ? 'Thêm'
                                            : 'Bỏ thêm'
                                        }
                                      >
                                        <IconButton
                                          size="small"
                                          onClick={event =>
                                            handleClick(event, row)
                                          }
                                        >
                                          <Icon
                                            color={
                                              row.isLinked
                                                ? !isItemSelected
                                                  ? 'error'
                                                  : 'primary'
                                                : !isItemSelected
                                                ? 'primary'
                                                : 'error'
                                            }
                                          >
                                            {row.isLinked
                                              ? !isItemSelected
                                                ? 'remove_circle_outlined'
                                                : 'add_circle_outlined'
                                              : !isItemSelected
                                              ? 'add_circle_outlined'
                                              : 'remove_circle_outlined'}
                                          </Icon>
                                        </IconButton>
                                      </Tooltip>
                                    )
                                  } else if (
                                    action.disableActions &&
                                    action.disableActions(
                                      row[action?.disableKey ?? 'status'],
                                    )
                                  ) {
                                    if (action?.contrastIcon?.icon) {
                                      return (
                                        <Tooltip
                                          key={index}
                                          arrow
                                          title={
                                            action.contrastIcon.tooltip ?? ''
                                          }
                                        >
                                          <IconButton
                                            sx={{ padding: 0 }}
                                            onClick={() =>
                                              action.onClick &&
                                              action.onClick(column, row)
                                            }
                                          >
                                            {action?.contrastIcon?.icon}
                                          </IconButton>
                                        </Tooltip>
                                      )
                                    }
                                    return <Icon key={index}></Icon>
                                  }
                                  return (
                                    <Tooltip
                                      key={index}
                                      arrow
                                      title={action.tooltip}
                                    >
                                      <IconButton
                                        sx={{ padding: 0 }}
                                        onClick={() =>
                                          action.onClick &&
                                          action.onClick(column, row)
                                        }
                                      >
                                        {action?.icon}
                                      </IconButton>
                                    </Tooltip>
                                  )
                                })}
                              </Stack>
                            ) : (
                              cellFormatter(column, row, value)
                            )}
                          </span>
                        </StyledTableCell>
                      )
                    })}
                  </StyledTableRow>
                )
              })
            ) : (
              <>
                {skeletons.map(skeleton => (
                  <TableRow key={skeleton}>
                    {Array.from({ length: columns.length }, (x, i) => i).map(
                      elm => (
                        <TableCell key={elm} sx={{ px: 1 }}>
                          <Skeleton height={28} />
                        </TableCell>
                      ),
                    )}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
        {noDataFound && (
          <Box
            height={'100%'}
            display="flex"
            alignItems="center"
            justifyContent={'center'}
            textAlign="center"
            m={3}
          >
            {/* <Stack flexDirection={'row'} gap={1}> */}
            {/* <FilterNone /> */}
            <Typography className="text-neutral-0 text-[12px]">
              {error ? error.message : 'No record'}
            </Typography>
            {/* </Stack> */}
          </Box>
        )}
      </TableContainer>
    </>
  )
}
