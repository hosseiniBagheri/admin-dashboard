
import SalesItem from "./SalesItem"
import ScoreList from "./ScoreList"
import WebsiteAnalytics from "./WebsiteAnalytics"

const RightColumn = () => {
    return (
        <div className="w-full p-2">
            <SalesItem />
            <WebsiteAnalytics />
            <ScoreList />
        </div>
    )
}

export default RightColumn