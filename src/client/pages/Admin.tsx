import * as React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

// class Admin extends React.Component<IAdminProps, IAdminState> {
//   constructor(props: IAdminProps) {
//     super(props);
//     this.state = {
//         admin: []
//     };
//   }

//   async componentDidMount() {
    
//     		const res = await fetch("");
//     		const admin = await res.json();
//     		this.setState({ admin });
    	
//     }

const Admin: React.FC<AdminProps> = () => {

  const { id } = useParams();

  return (
    <>
      <h1 className="text-center">
        {}
      </h1>
      
    </>
  );
}

interface AdminProps {}

// interface IAdminState {}

export default Admin;