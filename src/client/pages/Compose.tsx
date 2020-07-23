import * as React from "react";
import { RouteComponentProps } from "react-router-dom"
import PeopleCard from "../components/PeopleCard";

class People extends React.Component<IPeopleProps, IPeopleState> {
  constructor(props: IPeopleProps) {
    super(props);
    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://ghibliapi.herokuapp.com/people");
    const people = await res.json();
    this.setState({ people });
  }

  render() {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                {this.state.people.map(people => (
                    <PeopleCard key={people.id} people={people}/>
                ))}
            </section>
        </main>
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

export interface IPeopleProps extends RouteComponentProps<{ peopleid: string }> {}

export interface IPeopleState {
  people: Array<IPeople>
}

export default People;