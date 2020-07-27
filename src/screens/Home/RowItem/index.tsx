import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { CellPadded } from '../styles';
import { IUser } from '../../../interfaces';

interface IProps {
  item: IUser;
  warning: boolean;
  onRemove: Function;
}
const RowItem = ({ item, warning, onRemove }: IProps) => (
  <Table.Row warning={warning} data-cy="tr-user-row">
    <Table.Cell>
      <CellPadded>{item.name}</CellPadded>
    </Table.Cell>

    <Table.Cell>
      <CellPadded>{item.email}</CellPadded>
    </Table.Cell>

    <Table.Cell textAlign="right">
      <Button
        icon
        basic
        size="mini"
        color="red"
        labelPosition="left"
        onClick={() => onRemove(item)}
      >
        <Icon name="trash alternate" />
        Remover
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default RowItem;
