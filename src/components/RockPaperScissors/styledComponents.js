import Styled from 'styled-components'

export const AppContainer = Styled.div`
    background-color: #223a5f;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ResultContainer = Styled.div`
    padding: 20px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    align-items: center;
`

export const OptionsContainer = Styled.div`
    display: flex;
    flex-direction: column;
`

export const Option = Styled.h1`
    color: #ffffff;
    font-family: "Bree Serif";
    font-size: 45px;
    font-weight: 500;
`

export const ScoreContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 200px;
    width: 200px;
    border-radius: 10px;
`

export const ScorePhrase = Styled.p`
    color: #223a5f;
    font-family: "Roboto";
    font-size: 35px;
    font-weight: 500;
`

export const ScoreNumber = Styled.p`
    color: #223a5f;
    font-family: "Roboto";
    font-size: 50px;
    font-weight: 800;
`
export const GameViewContainer = Styled.div`
    height: 60vh;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const GameOptionsList = Styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`

export const TriggerButton = Styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  text-align: left;
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseButton = Styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const PopUpImage = Styled.img`
  width: 100%;
  align-self: center;
`
export const PopUpBody = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`
export const GameResultViewContainer = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content: center;
`
export const SelectedOptionsContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600px;
`
export const GameUserOptionContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = Styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameParticipantChoiceImage = Styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = Styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = Styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
