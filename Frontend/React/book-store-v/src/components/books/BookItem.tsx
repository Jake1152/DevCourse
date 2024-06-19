import styled from "styled-components";

const BookItemStyle = styled.div<Pick<Props, "view">>"
    a {
        display: Flex;
        flex-direction: ${({view }) => {view === 'grid' ? 1 : 0 }}
    }
