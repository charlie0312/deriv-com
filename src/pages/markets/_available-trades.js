import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
//SVG
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon-green.svg'
import DBot from 'images/svg/dbot-icon-green.svg'

// const ContentWrapper = styled(SectionContainer)`
//     max-width: 99.6rem;
// `
const CardWrapper = styled(Flex)`
    width: 120rem;
    height: 27.6rem;
    margin: 4rem auto 0 auto;
    position: relative;

    div:first-child {
        left: 0;
    }
    div:last-child {
        right: 0;
    }
`

const CardContainer = styled(Flex)`
    width: 40.8rem;
    height: 27.6rem;
    padding: 2.4rem 2.8rem 2.8rem 2.8rem;
    position: absolute;
    border-radius: 15px 15px 0 0;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.active_tab === props.title ? ('var(--color-white)') : ('var(--color-grey-8)')};
    cursor: pointer;
    box-shadow: 0 0 15px 1px rgba(0,0,0,0.1), 0 1px 0 1px rgba(255,255,255,1), 0 -1px 0 1px rgba(255,255,255,1);
    z-index: ${props => props.active_tab === props.title ? '30' : props.z_index};

    ${Header} {
        color: ${props => props.active_tab === props.title ? ('var(--color-red)') : ('var(--color-black-3)')};
        opacity: ${props => props.active_tab === props.title ? ('1') : ('0.5')};
    }
    ${Text} {
        opacity: ${props => props.active_tab === props.title ? ('1') : ('0.4')};
    }
`
const IconContainer = styled(Flex)`
    * {
        margin-right: 1.6rem;
    }
    svg {
        opacity: ${props => props.active_tab === props.title ? ('1') : ('0.5')};
    }
    svg:last-child {
        margin-right: 0;
    }
`
const ContentWrapper = styled(Container)``

const Card = ({ title, content, active_tab, onTabChange }) => {
    let Icons;
    switch (title) {
        case 'Margin':
            Icons = [DMT5]
            break;
        case 'Options':
            Icons = [DTrader, DBot]
            break;
        case 'Multipliers':
            Icons = [DTrader]
            break;
        default:
            Icons = []
            break;
    }
    return (
        <CardContainer title={title} active_tab={active_tab} onClick={() => onTabChange(title)} z_index={title === 'Options' ? '20' : '10'}>
            <div>
                <Header as='h4' align='center'>{title}</Header>
                <Text align='center'>{content}</Text>
            </div>
            {Icons.length === 0 ? (null) : (
                <IconContainer ai='center' height='auto' title={title} active_tab={active_tab}>
                    <Text>{localize('Available on:')}</Text>
                    {Icons.map((Icon, index) => <Icon key={index} />)}
                </IconContainer>
            )}
        </CardContainer>
    )
}
class AvailableTrades extends React.Component {
    state = {
        active_tab: 'Margin',
    }
    handleTabChange = new_tab => {
        if (new_tab === this.state.active_tab) return
        this.setState({ active_tab: new_tab })
    }
    render() {
        const { Margin, DigitalOptions, Multipliers, title } = this.props;
        return (
            <SectionContainer>
                <Header size='var(--text-size-header-1)' align='center'>{localize(title + ' trades available on Deriv')}</Header>
                <CardWrapper>
                    {Margin &&
                        <Card
                            title='Margin'
                            content='Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                    {DigitalOptions &&
                        <Card
                            title='Options'
                            content='Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options and call/put spreads on Forex.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                    {Multipliers &&
                        <Card
                            title='Multipliers'
                            content='Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.'
                            onTabChange={this.handleTabChange}
                            active_tab={this.state.active_tab}
                        />}
                </CardWrapper>
                <ContentWrapper>
                    {this.state.active_tab === 'Margin' && <Margin />}
                    {this.state.active_tab === 'Options' && <DigitalOptions />}
                    {this.state.active_tab === 'Multipliers' && <Multipliers />}
                </ContentWrapper>
            </SectionContainer>
        )
    }
}

export default AvailableTrades