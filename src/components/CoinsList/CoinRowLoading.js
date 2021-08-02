import styled from "styled-components";
import ContentLoader from 'react-content-loader'

const BrandLoader = () => (
    <ContentLoader viewBox="0 0 300 25">
        <rect x="0" y="0" rx="3" ry="5" width="20" height="20" />
        <rect x="30" y="6" rx="4" ry="4" width="100" height="8" />
    </ContentLoader>
)

const TextLoader = () => (
    <ContentLoader viewBox="0 0 200 20">
        <rect x="0" y="6" rx="0" ry="0" width="70" height="8" />
    </ContentLoader>
)


function CoinRowLoading() {
    return (
        <DivRowParent>
            <DivTableRow>
                <DivTableCell>
                    <BrandLoader />
                </DivTableCell>
                <DivPrice>
                    <TextLoader />
                </DivPrice>
                <DivMKTCAP>
                    <TextLoader />
                </DivMKTCAP>
                <DivCHANGEPCT24HOUR>
                    <TextLoader />
                </DivCHANGEPCT24HOUR>
            </DivTableRow>
        </DivRowParent>
    );
}

const DivRowParent = styled.div`
    width: 100%;
    display: table;
    padding: 14px 0px 0px 0px;
    border-bottom: 1px solid #ebeff2;
    cursor: pointer;
    &:hover { 
        background-color: #f5f8fa
    }
`

const DivTableRow = styled.div`
    width: 80%;
	display: table;
    text-align: left;
    margin: 0 auto;
`

const DivTableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 16%;
    img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        margin-bottom: -7px;
    }
`

const DivPrice = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 15%;
    color: #595959;
    &:first-letter {
        color: #a8a8a8
    }
`


const DivMKTCAP = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 10%;
    font-size: 15px;
    color: #595959;
    &:first-letter {
        color: #a8a8a8
    }
`

const DivCHANGEPCT24HOUR = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 8%;
    color: #5abf2e;
    font-weight: 600;
    font-size: 12px;
    text-align: right;
`

export default CoinRowLoading;