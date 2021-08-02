import styled from "styled-components";
import ContentLoader from 'react-content-loader'

const LoadingWidget = () => (
    <ContentLoader viewBox="0 0 300 100"
        backgroundColor={'#4c75ad'}
        foregroundColor={'#7299cf'}
    >
        <rect x="0" y="17" rx="3" ry="3" width="250" height="20" />
        <rect x="0" y="50" rx="3" ry="3" width="300" height="100" />
    </ContentLoader>
)

const Widget = (props) => {
    const { title, value, isPrice, isLoading } = props;

    return <Container>
        {isLoading ? (
            <DivLoading>
                <LoadingWidget />
            </DivLoading>

        ) : (
            <div>
                <Title>{title}</Title>
                {isPrice ? <PriceCurrency>{value}</PriceCurrency> : <PriceBTC>{value}<span>BTC</span></PriceBTC>}
            </div>
        )}
    </Container>
}

const Container = styled.div`
    margin-bottom: 55px
`

const DivLoading = styled.div`
    width: 200px;
`

const Title = styled.div`
    color: #7299cf;
    font-weight: bold;
    font-size: 15px;
`

const PriceCurrency = styled.div`
    font-size: 30px;
    color: '#fff';
    &:first-letter {
        font-size: 20px;
        color: #7299cf
    }
`

const PriceBTC = styled.div`
    font-size: 25px;
    color: '#fff';
    span {
        color: #5abf2e;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
    }
`

export default Widget