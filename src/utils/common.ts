export const uniqueId = () => Math.floor(Math.random() * Date.now())

export const OUTCOME = [
  { value: '1', name: 'Incomplete' },
  { value: '2', name: 'Out' },
  { value: '3', name: 'Pass offside' },
  { value: '4', name: 'Unknow' },
  { value: '5', name: 'Injuri clearance' },
]

export const LIST_KEY = [
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs', key: '' },
  {
    title: 'Tactical Shift (T)',
    subtile: 'Đổi chiến thuật',
    value: 'ts',
    key: 't',
  },
  { title: 'Substitution (0)', subtile: 'Thay người', value: 'ss', key: '0' },
  { title: 'Half End', subtile: 'Kết thúc hiệp', value: 'he' },
  { title: 'Pass (1)', subtile: 'Kiểm soát bóng', value: 'p', key: '1' },
  { title: 'Carries (2)', subtile: 'Kiểm soát bóng', value: 'c', key: '2' },
  { title: 'Shot (3)', subtile: 'sút', value: 's', key: '3' },
  { title: 'Error (2)', subtile: 'Lỗi cá nhân', value: 'err' },
  { title: 'Defensive term (6)', subtile: 'Tranh chấp', value: 'dt' },
  { title: 'Goalkeeper (4)', subtile: 'Thủ môn', value: 'gk' },
  { title: 'Foul (3)', subtile: 'Phạm lỗi', value: 'f' },
  { title: 'Others (3)', subtile: 'Khác', value: 'o' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  { title: 'Half Start', subtile: 'Bắt đầu hiệp', value: 'hs' },
  // { title: 'Hoàn thành', subtile: '', value: 'enter' },
  // { title: 'Để sau', subtile: '', value: 'shift' },
  // { title: 'Hủy', subtile: '', value: 'escape' },
]
