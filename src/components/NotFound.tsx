import * as React from 'react';

export interface INotFoundProps {
}

export default class NotFound extends React.Component<INotFoundProps> {
  public render() {
    return (
      <div>
        Sorry the URL was not found.
      </div>
    );
  }
}
