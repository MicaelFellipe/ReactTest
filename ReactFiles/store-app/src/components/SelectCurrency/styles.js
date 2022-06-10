import styled from "styled-components";

export const Dropdown = styled.div`
    width: 12px;
    position: relative;
`;

export const DropdownSelect = styled.div`
    background-color: white;
    width: 100%;
    align-items: center;
    cursor: pointer;
`;

export const Select = styled.span`

`;

export const ChevronIcon = styled.img`
    margin-top: 8px;
    width: 9px;
    heigth: 6px;
`;

export const DropdownList = styled.div`
    background-color: white;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    position: absolute;
    top: 110%;
    left: -40px;
    right: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s linear, visibility 0.2s linear;
    width: 104px;
    height: 139px;
`;

export const DropdownListItem = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
`;
