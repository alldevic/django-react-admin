import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, useAuthenticated } from 'react-admin';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import PropTypes from "prop-types"

const requestInterceptor = (req) => (
    {
        ...req,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`
        }
    }
);


class CustomLayout extends React.Component {

    static propTypes = {
        errSelectors: PropTypes.object.isRequired,
        errActions: PropTypes.object.isRequired,
        specSelectors: PropTypes.object.isRequired,
        oas3Selectors: PropTypes.object.isRequired,
        oas3Actions: PropTypes.object.isRequired,
        getComponent: PropTypes.func.isRequired
    }

    render() {
        let { errSelectors, specSelectors, getComponent } = this.props

        let SvgAssets = getComponent("SvgAssets")
        let Operations = getComponent("operations", true)
        let Row = getComponent("Row")
        let Col = getComponent("Col")
        let Errors = getComponent("errors", true)

        const FilterContainer = getComponent("FilterContainer", true)

        const isSpecEmpty = !specSelectors.specStr()

        const loadingStatus = specSelectors.loadingStatus()

        let loadingMessage = null

        if (loadingStatus === "loading") {
            loadingMessage = <div className="info">
                <div className="loading-container">
                    <div className="loading"></div>
                </div>
            </div>
        }

        if (loadingStatus === "failed") {
            loadingMessage = <div className="info">
                <div className="loading-container">
                    <h4 className="title">Failed to load API definition.</h4>
                    <Errors />
                </div>
            </div>
        }

        if (loadingStatus === "failedConfig") {
            const lastErr = errSelectors.lastError()
            const lastErrMsg = lastErr ? lastErr.get("message") : ""
            loadingMessage = <div className="info failed-config">
                <div className="loading-container">
                    <h4 className="title">Failed to load remote configuration.</h4>
                    <p>{lastErrMsg}</p>
                </div>
            </div>
        }

        if (!loadingMessage && isSpecEmpty) {
            loadingMessage = <h4>No API definition provided.</h4>
        }

        if (loadingMessage) {
            return <div className="swagger-ui">
                <div className="loading-container">
                    {loadingMessage}
                </div>
            </div>
        }

        return (

            <div className='swagger-ui'>
                <SvgAssets />
                <Errors />
                <FilterContainer />
                <Row>
                    <Col mobile={12} desktop={12} >
                        <Operations />
                    </Col>
                </Row>
            </div>
        )
    }
}

const CustomLayoutPlugin = () => {
    return {
        components: {
            CustomLayout: CustomLayout
        },
    }
}

const ApiUI = () => {
    useAuthenticated();
    return (
        <Card>
            <Title title="API" />
            <CardContent>
                <SwaggerUI
                    url="http://localhost:8000/api/schema.json"
                    requestInterceptor={requestInterceptor}
                    deepLinking={true}
                    displayOperationId={true}
                    plugins={[CustomLayoutPlugin]}
                    layout="CustomLayout"
                />
            </CardContent>
        </Card>)
};

export default ApiUI;
