import * as React from "react";

class Template extends React.Component<ITemplateProps, ITemplateState> {
  constructor(props: ITemplateProps) {
    super(props);
    this.state = {
        name: "string",
    };
  }

  render() {
    return (
    <h1 className="text-center">Template words</h1>
    );
  }
}

export interface ITemplateProps {}

export interface ITemplateState {
  name: string;
}

export default Template;
