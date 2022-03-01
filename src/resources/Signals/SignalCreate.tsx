import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin'

export function SignalCreate(props = {}) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="pair1" />
        <TextInput source="pair2" />
        <TextInput source="direction" defaultValue="LONG" />
        <NumberInput source="zoneStart" />
        <NumberInput source="zoneEnd" />
        <NumberInput source="limiteOrder" />
        <NumberInput source="stopLossDaily" />
        <NumberInput source="stopLossCata" />
        <NumberInput source="allocationPercentage" />
        <NumberInput source="takeProfitOne" />
        <NumberInput source="takeProfitTwo" />
        <NumberInput source="takeProfitThree" />
        <SelectInput
          source="status"
          choices={[
            { id: 1, name: 'PENDING' },
            { id: 2, name: 'DONE' },
            { id: 3, name: 'IN_PROGRESS' },
            { id: 4, name: 'CANCELED' },
            { id: 5, name: 'REMOVED' },
            { id: 6, name: 'REPLACED' },
          ]}
        />
        <TextInput source="comment" />
      </SimpleForm>
    </Create>
  )
}
