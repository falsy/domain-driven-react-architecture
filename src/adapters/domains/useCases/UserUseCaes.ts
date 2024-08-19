import { validateOrReject } from "class-validator"
import ILayerDTO from "adapters/dtos/interfaces/ILayerDTO"
import LayerDTO from "adapters/dtos/LayerDTO"
import IUserRepository from "adapters/repositories/interfaces/IUserRepository"
import IUserUseCase from "./interfaces/IUserUseCase"
import IUser from "../entities/interfaces/IUser"
import User from "../entities/User"

class UserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async getUserInfo(): Promise<ILayerDTO<IUser>> {
    try {
      const { isError, message, data } = await this.userRepository.getUserInfo()

      if (isError || !data) {
        return new LayerDTO({
          isError,
          message
        })
      }

      const user = new User(data)

      await validateOrReject(user)

      return new LayerDTO({
        data: user
      })
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Unknown error type"
      )
      throw error
    }
  }
}

export default UserUseCase
