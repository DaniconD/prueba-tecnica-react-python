const API_URL = 'http://127.0.0.1:8000/api/communities/'

export const listCommunities = async () => {
  return await fetch(API_URL)
}

export const getCommunity = async (communityId) => {
  return await fetch(`${API_URL}${communityId}`);
}

export const registerCommunity = async (newCommunity) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      "name": String(newCommunity.name).trim(),
      "category": String(newCommunity.category).trim(),
      "parent_community": String(newCommunity.parent_community).trim(),
      "short_description": String(newCommunity.short_description).trim(),
      "description": String(newCommunity.description).trim(),
    })
  })
}

export const updateCommunity = async (communityId, updatedCommunity) => {
  return await fetch(`${API_URL}${communityId}`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      "name": String(updatedCommunity.name).trim(),
      "category": String(updatedCommunity.category).trim(),
      "parent_community": String(updatedCommunity.parent_community).trim(),
      "short_description": String(updatedCommunity.short_description).trim(),
      "description": String(updatedCommunity.description).trim(),
    })
  })
}

export const deleteCommunity = async (communityId) => {
  return await fetch(`${API_URL}${communityId}`, {
    method: 'DELETE',
  })
}