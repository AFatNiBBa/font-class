
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hammer` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=thin hammer}
 * @preview ![hammer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTMuMDQ5IDE5Ni4yODNMNTMwLjQyNCAxNzMuNjU4QzUyNS44ODkgMTY5LjEyNSA1MTkuODY0IDE2Ni42MjkgNTEzLjQ1NCAxNjYuNjI5UzUwMS4wMTggMTY5LjEyNSA0OTYuNDgzIDE3My42NThMNDkwLjgyOSAxNzkuMzE0TDQ3MC43MDggMTU5LjE5M0M0NzUuMzAzIDEzNS43MjkgNDY4LjA1NSAxMTEuMjkxIDQ1MS4yMzcgOTQuNDU5TDQwNS45ODUgNDkuMjA1QzM3NC4yNDcgMTcuNDc1IDMzMi4wNTEgMCAyODcuMTc2IDBDMjQyLjI5OSAwIDIwMC4xMTQgMTcuNDc1IDE2OC4zODkgNDkuMjA3TDE2MC41NDQgNTcuMDU1TDI1Ni41NDcgMTA1LjA1N1YxMTguODYzQzI1Ni41NDcgMTMzLjA0NyAyNjAuODYyIDE0Ny4wMDYgMjY4LjY1MSAxNTguNzU0TDUuMTU5IDM4OS4wOTRDLTIyLjk2NiA0MTcuMjE5IC0yMi45NjYgNDYyLjc4MSA1LjE1OSA0OTAuOTA2QzE5LjIyMSA1MDQuOTY5IDM3LjYyOCA1MTIgNTYuMDY1IDUxMlM5Mi45MDkgNTA0Ljk2OSAxMDYuOTcxIDQ5MC45MDZMMzM3LjI0MyAyMjcuNDk0QzM0OC45NTYgMjM1LjQ0OSAzNjIuNzg4IDIzOS43NzMgMzc3LjMzOSAyMzkuNzczQzM4Mi4wOTYgMjM5Ljc3MyAzODYuODUgMjM5LjMwOSAzOTEuNTIyIDIzOC4zODdMNDExLjYzOSAyNTguNTA0TDQwNS45ODUgMjY0LjE1OEMzOTYuNjI4IDI3My41MTYgMzk2LjYyOCAyODguNzQgNDA1Ljk4MyAyOTguMDk4TDQyOC42MDggMzIwLjcyM0M0MzMuMTQzIDMyNS4yNTYgNDM5LjE3MSAzMjcuNzU0IDQ0NS41NzkgMzI3Ljc1NFM0NTguMDE0IDMyNS4yNTYgNDYyLjU0NyAzMjAuNzIzTDU1My4wODEgMjMwLjIyNUM1NjIuNDA5IDIyMC44NDQgNTYyLjM4OSAyMDUuNjI3IDU1My4wNDkgMTk2LjI4M1pNOTUuNjU3IDQ3OS41OTJDODUuMDc3IDQ5MC4xNzIgNzEuMDE2IDQ5NiA1Ni4wNjUgNDk2UzI3LjA1MyA0OTAuMTcyIDE2LjQ3MyA0NzkuNTkyQy01LjM1OSA0NTcuNzYyIC01LjM1OSA0MjIuMjM4IDE1LjY5IDQwMS4xMzlMMjc4LjkwNyAxNzEuMDM3TDMyNS4wNDkgMjE3LjE2NEw5NS42NTcgNDc5LjU5MlpNNTQxLjc2OCAyMTguOTA4TDQ1MS4yMzMgMzA5LjQwOEM0NDguMDk4IDMxMi41NDUgNDQzLjA1OSAzMTIuNTQzIDQzOS45MjIgMzA5LjQwOEw0MTcuMjk3IDI4Ni43ODVDNDE0LjE4IDI4My42NjYgNDE0LjE4IDI3OC41OSA0MTcuMjk5IDI3NS40NzFMNDM0LjI2NiAyNTguNTA0TDM5Ni43OTkgMjIxLjAzN0MzODguNjA0IDIyMi42NTQgMzg0LjIwNCAyMjMuNzczIDM3Ny4zMzkgMjIzLjc3M0MzNjIuNDY0IDIyMy43NzMgMzQ4LjUzNCAyMTguMDMxIDMzOC4xMSAyMDcuNTk2TDI4OC45NTQgMTU4LjQ1NUMyNzguNTI4IDE0OC4wMjkgMjcyLjU0NyAxMzMuNiAyNzIuNTQ3IDExOC44NjNWOTUuMTY4TDE4Ny45MzQgNTIuODYxQzIxNS41MTIgMjkuMDE0IDI1MC4zNDIgMTYgMjg3LjE3NiAxNkMzMjcuNzggMTYgMzY1Ljk1NiAzMS44MTEgMzk0LjY3MSA2MC41MThMNDM5LjkxOSAxMDUuNzY4QzQ1Mi45ODEgMTE4Ljg0IDQ1OC42MiAxMzcuNjYyIDQ1NS4wMDYgMTU2LjExN0w0NTMuMzY4IDE2NC40OEw0OTAuODMxIDIwMS45NDNMNTA3Ljc5NCAxODQuOTc1QzUxMC45NSAxODEuODE2IDUxNi4wMDMgMTgxLjg2MyA1MTkuMTEgMTg0Ljk3MUw1NDEuNzMzIDIwNy41OTRDNTQ0Ljg1NCAyMTAuNzE1IDU0NC44NTQgMjE1LjgwNyA1NDEuNzY4IDIxOC45MDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Hammer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M553.049 196.283L530.424 173.658C525.889 169.125 519.864 166.629 513.454 166.629S501.018 169.125 496.483 173.658L490.829 179.314L470.708 159.193C475.303 135.729 468.055 111.291 451.237 94.459L405.985 49.205C374.247 17.475 332.051 0 287.176 0C242.299 0 200.114 17.475 168.389 49.207L160.544 57.055L256.547 105.057V118.863C256.547 133.047 260.862 147.006 268.651 158.754L5.159 389.094C-22.966 417.219 -22.966 462.781 5.159 490.906C19.221 504.969 37.628 512 56.065 512S92.909 504.969 106.971 490.906L337.243 227.494C348.956 235.449 362.788 239.773 377.339 239.773C382.096 239.773 386.85 239.309 391.522 238.387L411.639 258.504L405.985 264.158C396.628 273.516 396.628 288.74 405.983 298.098L428.608 320.723C433.143 325.256 439.171 327.754 445.579 327.754S458.014 325.256 462.547 320.723L553.081 230.225C562.409 220.844 562.389 205.627 553.049 196.283ZM95.657 479.592C85.077 490.172 71.016 496 56.065 496S27.053 490.172 16.473 479.592C-5.359 457.762 -5.359 422.238 15.69 401.139L278.907 171.037L325.049 217.164L95.657 479.592ZM541.768 218.908L451.233 309.408C448.098 312.545 443.059 312.543 439.922 309.408L417.297 286.785C414.18 283.666 414.18 278.59 417.299 275.471L434.266 258.504L396.799 221.037C388.604 222.654 384.204 223.773 377.339 223.773C362.464 223.773 348.534 218.031 338.11 207.596L288.954 158.455C278.528 148.029 272.547 133.6 272.547 118.863V95.168L187.934 52.861C215.512 29.014 250.342 16 287.176 16C327.78 16 365.956 31.811 394.671 60.518L439.919 105.768C452.981 118.84 458.62 137.662 455.006 156.117L453.368 164.48L490.831 201.943L507.794 184.975C510.95 181.816 516.003 181.863 519.11 184.971L541.733 207.594C544.854 210.715 544.854 215.807 541.768 218.908Z" />
        </Icon>
    </>
}