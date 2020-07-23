import * as React from "react";
import { Link } from "react-router-dom";

class PeopleCard extends React.Component<IPeopleCardProps, IPeopleCardState> {
  constructor(props: IPeopleCardProps) {
    super(props);
    this.state = {
        name: "string",
    }
  }

  render() {
    return (
    <div className="col-md-6">
        <div className="card my-2 shadow-sm">
            <div className="card-body">
            <h4 className="text-center">{this.props.people.name}</h4>
            <Link to={`/people/details/${this.props.people.id}`}>Age</Link>
            </div>
        </div>
    </div>
    );
  }
}
interface IPeople {
    id: string;
    name: string;
    gender: string;
    age: string;
    eye_color: string;
    hair_color: string;
  }

export interface IPeopleCardProps {
    people: IPeople
}

export interface IPeopleCardState {
  name: string;
}

export default PeopleCard;
