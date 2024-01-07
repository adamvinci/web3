import CompteurLine from "./CompteurLine";

const Compteur = ({ click }) => {
    const total = click.bad + click.good + click.neutral;
    if (!total) {
        return <p>No statistic gathered</p>

    }
    const average = total !== 0 ? (click.good - click.bad) / total : 0;
    const positive = total !== 0 ? ((click.good / total) * 100) : 0;

    return (
        <div>
            <CompteurLine text="Good" value={click.good} />
            <CompteurLine text="Neutral" value={click.neutral} />
            <CompteurLine text="Bad" value={click.bad} />
            <CompteurLine text="Total" value={total} />
            <CompteurLine text="Average" value={average} />
            <CompteurLine text="Positive" value={positive} />

        </div>
    )
}

export default Compteur;