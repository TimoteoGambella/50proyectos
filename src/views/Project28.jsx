import axios from "axios";
import { useEffect, useState } from "react"
import "../styles/project28/project28.scss"

export default function Project28({setDirUrl}){


    useEffect(() => {

        setDirUrl("home")
        document.getElementById("body").style.backgroundColor="white"
        document.getElementById("body").style.background="none"
        document.getElementById("body").style.overflowY="scroll"
        const html = document.querySelector('html')
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const APIURL = 'https://api.github.com/users/'

    const [data,setData]=useState(null)
    const [user,setUser]=useState([])
    
    async function getUser(username) {
        try {
            const { data } = await axios(APIURL + username)

            setUser(data)
            setData(true)

            getRepos(username)
        } catch(err) {
            if(err.response.status === 404) {
                setUser([])
                setData(false)
            }
        }
    }
    
    async function getRepos(username) {
        try {
            const { data } = await axios(APIURL + username + '/repos?sort=created')
    
            addReposToCard(data)
        } catch(err) {
            setUser([])
            setData(false)
        }
    }
    
    function addReposToCard(repos) {
        const reposEl = document.getElementById('repos')
    
        repos
            .slice(0, 5)
            .forEach(repo => {
                const repoEl = document.createElement('a')
                repoEl.classList.add('repo')
                repoEl.href = repo.html_url
                repoEl.target = '_blank'
                repoEl.innerText = repo.name
    
                reposEl.appendChild(repoEl)
            })
    }

    return(
        <div className="project28-container">
            <form className="user-form" id="form" onSubmit={(e)=>{
                e.preventDefault()
            
                const user = document.getElementById('search').value
            
                if(user) {
                    getUser(user)
            
                    document.getElementById('search').value = ''
                }
            }}>
                <input type="text" id="search" placeholder="Search a Github User"/>
            </form>

            <main id="main">
                {data &&
                    <div className="card">
                        <div>
                          <img src={user.avatar_url} alt={user.name} className="avatar"/>
                        </div>
                        <div className="user-info">
                          <h2>{user.name || user.login}</h2>
                          {user.bio ? `<p>${user.bio}</p>` : ''}
                          <ul>
                            <li>{user.followers} <strong>Followers</strong></li>
                            <li>{user.following} <strong>Following</strong></li>
                            <li>{user.public_repos} <strong>Repos</strong></li>
                          </ul>
                          <div id="repos"></div>
                        </div>
                    </div>
                }
                {data===false &&
                    <div className="card">
                        <h1>No profile with this username</h1>
                    </div>
                }
            </main>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==" crossorigin="anonymous"></script>
        </div>
    )
}