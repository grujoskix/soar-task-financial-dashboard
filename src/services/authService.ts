import type { User } from '@/types/user'

export const authService = {
  fetchUser: async () => {
    // Mock API request/response
    return new Promise<User>((resolve) =>
      setTimeout(
        () =>
          resolve({
            _id: '1',
            avatar: 'charlene',
            name: 'Charlene Reed',
            username: 'Charlene Reed',
            position: 'Manager',
            email: 'charlenereed@gmail.com',
            password: '1234567890',
            birth_date: new Date('1990-01-25'),
            address_present: 'San Jose, California, USA',
            address_permanent: 'San Jose, California, USA',
            city: 'San Jose',
            country: 'USA',
            code: '45962',
          }),
        300,
      ),
    )
  },
  fetchPeople: async () => {
    // Mock API request/response
    return new Promise<User[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              _id: '2',
              avatar: 'livia',
              name: 'Livia Bator',
              username: 'Livia',
              position: 'CEO',
              email: 'liviabator@gmail.com',
            },
            {
              _id: '3',
              avatar: 'randy',
              name: 'Randy Press',
              username: 'Randy',
              position: 'Director',
              email: 'randypress@gmail.com',
            },
            {
              _id: '4',
              avatar: 'workman',
              name: 'Workman',
              username: 'Workman',
              position: 'Designer',
              email: 'workman@gmail.com',
            },
          ]),
        300,
      ),
    )
  },
}
