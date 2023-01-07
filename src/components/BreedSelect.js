import { Component } from "react";
import Select from 'react-select'
import { fetchBreeds } from "api";

export class BreedSelect extends Component {
    state = {
        breeds: [],
    };
    
    async componentDidMount() {
        try {
            const breeds = await fetchBreeds();
            this.setState({ breeds });
        } catch (error){}
    }
    render() {
        const options = this.state.breeds.map(breed => ({
            value: breed.id,
            label: breed.name
        }))
        return (
            <div>
                <Select
                    options={options}
                    onChange={option => {
                        console.log(option);
                    }}
                />
            </div>
        );
    }
}
