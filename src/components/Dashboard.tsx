import { useState } from "react"

const Dashboard = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Height, setHeight] = useState<number>(0);
    const [bmi, setbmi] = useState<number>(0);

    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log(Weight)
    }
    const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(+event.target.value)
        console.log(Height)
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const heightInMeters = Height / 100;
        const bmiValue = Weight / (heightInMeters * heightInMeters);
        setbmi(bmiValue);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>BMI</h1>
                <h2>{bmi}</h2>
                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" name="weight" onChange={onChangeWeight} />
                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height" onChange={onChangeHeight} />
                <input type="submit" />
            </form>
        </>
    )
}


export default Dashboard