import styled from 'styled-components'

export default styled.ul`
    list-style: none;
    padding: 0;

    li {
        a {
            display: block;
            text-decoration: none;
            color: #b4bcc8;
            
        }
    }

    li:hover {
        background-color: #353749;
        border-left: 2px solid #00F900;
        

        a {
            color: #fff;
        }
    }
`