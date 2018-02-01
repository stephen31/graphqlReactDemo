class ApiService {

  constructor() {
    this.apiUrl = 'http://localhost:3002/graphql';
    this.userFields = '{id, first_name, last_name, email, department, country, todo_count}';
    this.todoFields = '{id, title, completed, user {first_name, last_name}}';
  }


  async getGraphQLData(resource, params, fields) {
    const query = `{${resource} ${this.paramsToString(params)} ${fields}}`;
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      mode: cors,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(query)
    });

    if(res.ok) {
      const body = await res.json();
      return body.data;
    } else {
      throw new Error(res.status);
    }
  }
}

async getTodos(params = {}) {
  const data = await this.getGraphQLData('todos', params, this.todoFields);
  return data.todos;
}

async getUsers(params = {}) {
  const data = await this.getGraphQLData('users', params, this.userFields);
  return data.todos;
}

paramsToString(params) {
  let paramString = '';
  if (params.constructor === Object && Object.keys(params).length) {
      let tmp = [];
      for (let key in params) {
          let paramStr = params[key];
          if(paramStr !== '') {
              if (typeof params[key] === 'string') {
                  paramStr = `"${paramStr}"`;
              }
              tmp.push(`${key}:${paramStr}`);
          }
      }
      if (tmp.length) {
          paramString = `(${tmp.join()})`;
      }
  }
  return paramString;
}

export default new ApiService();