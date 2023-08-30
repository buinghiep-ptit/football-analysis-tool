import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useScale } from 'store'
import * as yup from 'yup'
import { Location } from './Location'
import { PassBackheel } from './PassBackheel'
import { Players } from './Players'
import { Team } from './Team'
import { TimeRow } from './TimeRow'
import { PassDeflected } from './PassDeflected'
import { PassMiscommunication } from './PassMiscommunication'
import { BodyPass } from './BodyPass'
import { PassType } from './PassType'

export const Pass = () => {
  const scale = useScale(state => state.scale)
  const validationSchema = yup.object().shape({})

  const methods = useForm({
    defaultValues: {
      passbackheel: true,
      passdeflected: false,
      passmiscommunication: true,
      bodypass1: '1',
      bodypass2: '6',
      passtype1: '4',
      passtype2: '3',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmitHandler: SubmitHandler<any> = async (values: any) => {
    console.log('values:', values)
  }
  return (
    <div>
      <div
        className="flex flex-row"
        style={{ margin: `${16 * scale}px`, gap: `${62 * scale}px` }}
      >
        <div className="w-[54.21%] ">
          <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <FormProvider {...methods}>
              <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
                <TimeRow />
                <Team />
                <Players />
                <Location />
                <PassBackheel />
                <PassDeflected />
                <PassMiscommunication />
                <BodyPass />
                <PassType />
              </div>
            </FormProvider>
          </form>
        </div>
        <div className="flex-grow bg-slate-600">y</div>
      </div>
      <button onClick={methods.handleSubmit(onSubmitHandler)}>Submit</button>
    </div>
  )
}
