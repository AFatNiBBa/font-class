
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=duotone angle}
 * @preview ![angle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzNS44MTggMTgxLjIzOEwyMTQgMjI0Ljc3MUMyMzMuMzkxIDI0MC41ODIgMjUwLjUwOCAyNTguOTg2IDI2NS4yMzQgMjc5LjI1NEwzMDUuNjUgMjUzLjI3MUMyODYuMDg2IDIyNS44OTMgMjYyLjUyNyAyMDEuNjYgMjM1LjgxOCAxODEuMjM4Wk0zMjMgMjgwLjE4NkwyODIuNjY2IDMwNi4xMTNDMjk2LjM0NiAzMzAuMTQ4IDMwNi42MTUgMzU2LjMwOSAzMTIuOTMyIDM4NEgzNjIuMDY2QzM1NC44NjEgMzQ2LjgxOCAzNDEuNCAzMTEuOTI4IDMyMyAyODAuMTg2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTYuMDA5IDQ4MEgzMi4wMDlDMjAuOTE1IDQ4MCAxMC42MzQgNDc0LjI1IDQuNzkgNDY0LjgyOEMtMS4wNTMgNDU1LjM5MSAtMS41ODUgNDQzLjYwOSAzLjM4NCA0MzMuNjg4TDE5NS4zODQgNDkuNjg4QzIwMy4zMjIgMzMuODc1IDIyMi41MDkgMjcuNDg0IDIzOC4zMjIgMzUuMzc1QzI1NC4xMzQgNDMuMjgxIDI2MC41NCA2Mi41IDI1Mi42MzQgNzguMzEzTDgzLjc5IDQxNkg0MTYuMDA5QzQzMy42OTcgNDE2IDQ0OC4wMDkgNDMwLjMyOCA0NDguMDA5IDQ0OFM0MzMuNjk3IDQ4MCA0MTYuMDA5IDQ4MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Angle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M235.818 181.238L214 224.771C233.391 240.582 250.508 258.986 265.234 279.254L305.65 253.271C286.086 225.893 262.527 201.66 235.818 181.238ZM323 280.186L282.666 306.113C296.346 330.148 306.615 356.309 312.932 384H362.066C354.861 346.818 341.4 311.928 323 280.186Z" />
            <path d="M416.009 480H32.009C20.915 480 10.634 474.25 4.79 464.828C-1.053 455.391 -1.585 443.609 3.384 433.688L195.384 49.688C203.322 33.875 222.509 27.484 238.322 35.375C254.134 43.281 260.54 62.5 252.634 78.313L83.79 416H416.009C433.697 416 448.009 430.328 448.009 448S433.697 480 416.009 480Z" />
        </Icon>
    </>
}