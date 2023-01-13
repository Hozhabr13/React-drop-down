import { useState } from "react"

const useScience = () => {
    const [sciences, addScienceState] = useState<string[]>(['Education', 'Art', 'Sport'])

    const addScience = (value: string) => {
        addScienceState((oldValue: string[]) => {
            return [
                value,
                ...oldValue
            ]
        })
    }

    return [
        sciences,
        addScience
    ]
}

export default useScience;