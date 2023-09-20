import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react"

const CardItem = () => {
    return (
        <Card className="mx-auto" decoration="top" decorationColor="indigo">
            <Flex justifyContent="between" alignItems="center">
                <Text>Sales</Text>
                <BadgeDelta deltaType="moderateIncrease">+12.3%</BadgeDelta>
            </Flex>
            <Metric>$ 34.24</Metric>
        </Card>
    )
}

export default CardItem