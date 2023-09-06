import { useAppStore } from 'store'
import { BodyPass } from './BodyPass'
import { Location } from './Location'
import { PassBackheel } from './PassBackheel'
import { PassDeflected } from './PassDeflected'
import { PassMiscommunication } from './PassMiscommunication'
import { PassType } from './PassType'
import { Players } from './Players'
import { Team } from './Team'
import { TimeRow } from './TimeRow'
import { Technique } from './Technique'
import { PassHeight } from './PassHeight'
import { Outcome } from './Outcome'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'

export const Pass = () => {
  const scale = useAppStore(state => state.scale)
  // const updateData = useAppStore(state => state.updateData)
  const data = useAppStore(state => state.data)

  const [defaultValues] = useState<any>({
    // passbackheel: data.passbackheel,
    // passdeflected: data.passdeflected,
    // passmiscommunication: data.passmiscommunication,
    // bodypass: data.bodypass,
    // passtype: data.passtype,
    // technique: data.technique,
    // passheight: data.passheight,
    // outcome: data.outcome,
  })

  const validationSchema = yup.object().shape({})

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  useEffect(() => {
    defaultValues.passbackheel = data.passbackheel
    defaultValues.passdeflected = data.passdeflected
    defaultValues.passmiscommunication = data.passmiscommunication
    defaultValues.bodypass = data.bodypass
    defaultValues.passtype = data.passtype
    defaultValues.technique = data.technique
    defaultValues.passheight = data.passheight
    defaultValues.outcome = data.outcome
    methods.reset({ ...defaultValues })
  }, [data])

  const onSubmitHandler: SubmitHandler<any> = async (values: any) => {
    console.log('values:', values, data)
  }

  return (
    <div className="overflow-auto">
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <div
            className="flex flex-row"
            style={{ gap: `${62 * scale}px`, margin: `${16 * scale}px` }}
          >
            <div className="w-[54.21%]">
              <div className="flex flex-col" style={{ gap: `${16 * scale}px` }}>
                <TimeRow />
                <Team />
                <Players />
                <Location />
                <PassBackheel />
                <PassDeflected />
                <PassMiscommunication />
                <div
                  className="flex flex-col "
                  style={{ gap: `${4 * scale}px` }}
                >
                  <BodyPass />
                  <PassType />
                </div>
              </div>
            </div>
            <div className="w-[39.9%]">
              {/* <div className="flex flex-col" style={{ gap: `${8 * scale}px` }}> */}
              <Technique />
              <PassHeight />
              <Outcome />
              {/* </div> */}
            </div>
          </div>
        </FormProvider>
      </form>
    </div>
  )
}
