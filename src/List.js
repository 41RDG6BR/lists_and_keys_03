import React, { Component} from 'react' 

class List extends Component {
	render() {
		let list = [
			{
				name:"Rodrigo",
				email:"rdg6design@gmail.com"
			},
			{
				name:"rdg6",
				email:"rdg6br@gmail.com"	
			}
		]
		return (
			<div>
			<table border="1">
			<tr>
					<th>name</th>
					<th>email</th>
			</tr>
				{list.map((item)=>{
					return <tr>
					<td>
						{item.name}
					</td>
					<td>
						{item.email}
					</td>
					</tr>
				})}
			</table>
			</div>
			)
	}
}
export default List;