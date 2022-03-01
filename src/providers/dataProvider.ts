import { DataProvider } from 'react-admin'

export const dataProvider: DataProvider = {
  async getList(resource, params) {
     return {
       data: [],
       total: 0,
     }
  },
  // @ts-ignore
  async getOne(resource, params) {
     return {
       data: {
         id: 0,
       }
     }
  },
  async getMany(resource, params) {
    return {
      data: [],
      total: 0,
    }
  },
  async getManyReference(resource, params) {
    return {
      data: [],
      total: 0,
    }
  },
  // @ts-ignore
  async create(resource, params) {
     return {
       data: {
         id: 0,
       }
     }
  },
  // @ts-ignore
  async update(resource, params) {
     return {
       data: {
         id: 1,
       }
     }
  },
  async updateMany(resource, params) {
     return {
       data: []
     }
  },
  // @ts-ignore
  async delete(resource, params) {
     return {
       data: {
         id: 1,
       }
     }
  },
  async deleteMany(resource, params) {
     return {
       data: []
     }
  },
}
