import './metric-card.css'
type MetricCardProps = {
    value: string;
    label: string
}

export default function MetricCard({ value, label }: MetricCardProps){
    return(

        <div className="metric-card-container">
            <h5 className="text-orange serif">{value}</h5>
            <span className='text-dark uppercase'>{label}</span>
    </div>
    )
}