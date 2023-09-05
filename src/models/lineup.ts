export interface IPlayer {
  id?: number
  name?: string
  jerseyNo?: string
  teamId?: number
  position?: string
  top?: string
  left?: string
  imgUrl?: string
}

export interface ILineUp {
  logo?: string
  teamId?: number
  teamName?: string
  pos?: number
  players?: IPlayer[]
}
