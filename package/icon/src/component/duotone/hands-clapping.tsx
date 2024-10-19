
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hands-clapping` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-clapping?s=duotone hands-clapping}
 * @preview ![hands-clapping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzNTcuNTQ3TDM4NCAxOTMuNjg2QzM4NCAxODcuNjcgMzc5LjMyOCAxNjAgMzUyIDE2MEMzMzQuMzEyIDE2MCAzMjAgMTc0LjMyOCAzMjAgMTkyVjI2OC4xNDFMMTY5LjE1NiAxMTcuMjk3QzE2NC40NjkgMTEyLjYwOSAxNTguMzI4IDExMC4yNjYgMTUyLjE4OCAxMTAuMjY2QzEzOC40NzkgMTEwLjI2NiAxMjguMTg4IDEyMS40NzUgMTI4LjE4OCAxMzQuMjY2QzEyOC4xODggMTQwLjQwNiAxMzAuNTMxIDE0Ni41NDcgMTM1LjIxOSAxNTEuMjM0TDIyNC41MjEgMjQwLjUzNUMyMjcuNDIxIDI0My40MzUgMjI4Ljg3MSAyNDcuMjM1IDIyOC44NzEgMjUxLjAzNUMyMjguODcxIDI1NC44MzYgMjI3LjQyMSAyNTguNjM2IDIyNC41MjEgMjYxLjUzNUwyMjQuNTIxIDI2MS41MzVDMjIxLjYyMiAyNjQuNDM1IDIxNy44MjIgMjY1Ljg4NCAyMTQuMDIxIDI2NS44ODRDMjEwLjIyMSAyNjUuODg0IDIwNi40MjEgMjY0LjQzNSAyMDMuNTIyIDI2MS41MzVMOTUuOTA2IDE1My45MjJDOTEuMjE5IDE0OS4yMzQgODUuMDc4IDE0Ni44OTEgNzguOTM4IDE0Ni44OTFDNjUuMjI5IDE0Ni44OTEgNTQuOTM4IDE1OC4xIDU0LjkzOCAxNzAuODkxQzU0LjkzOCAxNzcuMDMxIDU3LjI4MSAxODMuMTcyIDYxLjk2OSAxODcuODU5TDE2OS41ODQgMjk1LjQ3M0MxNzIuNDgzIDI5OC4zNzIgMTczLjkzMyAzMDIuMTcyIDE3My45MzMgMzA1Ljk3M0MxNzMuOTMzIDMwOS43NzMgMTcyLjQ4MyAzMTMuNTczIDE2OS41ODQgMzE2LjQ3M0wxNjkuNTg0IDMxNi40NzNDMTY2LjY4NCAzMTkuMzcyIDE2Mi44ODQgMzIwLjgyMiAxNTkuMDg0IDMyMC44MjJDMTU1LjI4NCAzMjAuODIyIDE1MS40ODMgMzE5LjM3MiAxNDguNTg0IDMxNi40NzNMNTkuMjgxIDIyNy4xNzJDNTQuNTk0IDIyMi40ODQgNDguNDUzIDIyMC4xNDEgNDIuMzEyIDIyMC4xNDFDMjguNjA0IDIyMC4xNDEgMTguMzEyIDIzMS4zNSAxOC4zMTIgMjQ0LjE0MUMxOC4zMTIgMjUwLjI4MSAyMC42NTYgMjU2LjQyMiAyNS4zNDQgMjYxLjEwOUwxMTQuNjQ2IDM1MC40MUMxMTcuNTQ2IDM1My4zMSAxMTguOTk2IDM1Ny4xMSAxMTguOTk2IDM2MC45MUMxMTguOTk2IDM2NC43MTEgMTE3LjU0NiAzNjguNTExIDExNC42NDYgMzcxLjQxTDExNC42NDYgMzcxLjQxQzExMS43NDcgMzc0LjMxIDEwNy45NDcgMzc1Ljc2IDEwNC4xNDYgMzc1Ljc2QzEwMC4zNDYgMzc1Ljc2IDk2LjU0NiAzNzQuMzEgOTMuNjQ2IDM3MS40MUw0MC45NjkgMzE4LjczNEMzNi4yODEgMzE0LjA0NyAzMC4xNDEgMzExLjcwMyAyNCAzMTEuNzAzQzEwLjI5MSAzMTEuNzAzIDAgMzIyLjkxMiAwIDMzNS43MDNDMCAzNDEuODQ0IDIuMzQ0IDM0Ny45ODQgNy4wMzEgMzUyLjY3MkMxMTIuNTUzIDQ1OC4xOTMgMTUxLjI2NCA1MTIgMjMyLjMxMiA1MTJDMzE4LjA1MSA1MTIgMzg0IDQ0MC45MTQgMzg0IDM1Ny41NDdaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMxOS45OTQgMEMzMTEuMTUgMCAzMDMuOTk0IDcuMTU2IDMwMy45OTQgMTZWODBDMzAzLjk5NCA4OC44NDQgMzExLjE1IDk2IDMxOS45OTQgOTZTMzM1Ljk5NCA4OC44NDQgMzM1Ljk5NCA4MFYxNkMzMzUuOTk0IDcuMTU2IDMyOC44MzggMCAzMTkuOTk0IDBaTTM4My40MzIgOTZDMzg4LjU1NyA5NiAzOTMuNTg4IDkzLjU0NyAzOTYuNjgyIDg4Ljk4NEw0MjkuMjQ0IDQwLjk4NEM0MzEuMDk4IDM4LjIzOCA0MzEuOTg4IDM1LjExOSA0MzEuOTg4IDMyLjAzM0M0MzEuOTg4IDIzLjA4NiA0MjQuNzE1IDE1Ljk5NiA0MTYuMDE4IDE1Ljk5NkM0MTAuODkzIDE1Ljk5NiA0MDUuODQ0IDE4LjQ2MSA0MDIuNzQ0IDIzLjAxNkwzNzAuMTgyIDcxLjAxNkMzNjguMzI4IDczLjc2MiAzNjcuNDM4IDc2Ljg3OSAzNjcuNDM4IDc5Ljk2N0MzNjcuNDM4IDg4Ljg4NSAzNzQuNjcyIDk2IDM4My40MzIgOTZaTTIzNy4yNDQgMjMuMDE2QzIzNC4xNDUgMTguNDU1IDIyOS4xMDIgMTUuOTg0IDIyMy45NzcgMTUuOTg0QzIxNS4zMTIgMTUuOTg0IDIwOCAyMy4wNTkgMjA4IDMyLjAzM0MyMDggMzUuMTE5IDIwOC44OTEgMzguMjM4IDIxMC43NDQgNDAuOTg0TDI0My4zMDcgODguOTg0QzI0Ni40IDkzLjU0NyAyNTEuNDMyIDk2IDI1Ni41NTcgOTZDMjY1LjMxOCA5NiAyNzIuNTUxIDg4Ljg4MyAyNzIuNTUxIDc5Ljk2N0MyNzIuNTUxIDc2Ljg3OSAyNzEuNjYgNzMuNzYyIDI2OS44MDcgNzEuMDE2TDIzNy4yNDQgMjMuMDE2Wk00NzkuOTk0IDE2MEM0NjIuMzA3IDE2MCA0NDcuOTk0IDE3NC4zMjggNDQ3Ljk5NCAxOTJWMjY4LjE0MUw0MTUuOTk0IDIzNi4xNDFWMzU3LjU0N0M0MTUuOTk0IDQ1MS41NTUgMzUyLjY4OCA0OTkuMDIzIDMzNy42NyA1MDkuNzkxQzM0NS4xMzEgNTEwLjkyMiAzNTIuNjE3IDUxMiAzNjAuMzA3IDUxMkM0NDYuMDQ1IDUxMiA1MTEuOTk0IDQ0MC45MTQgNTExLjk5NCAzNTcuNTQ3VjE5MkM1MTEuOTk0IDE3NC4zMjggNDk3LjY4MiAxNjAgNDc5Ljk5NCAxNjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandsClapping(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M384 357.547L384 193.686C384 187.67 379.328 160 352 160C334.312 160 320 174.328 320 192V268.141L169.156 117.297C164.469 112.609 158.328 110.266 152.188 110.266C138.479 110.266 128.188 121.475 128.188 134.266C128.188 140.406 130.531 146.547 135.219 151.234L224.521 240.535C227.421 243.435 228.871 247.235 228.871 251.035C228.871 254.836 227.421 258.636 224.521 261.535L224.521 261.535C221.622 264.435 217.822 265.884 214.021 265.884C210.221 265.884 206.421 264.435 203.522 261.535L95.906 153.922C91.219 149.234 85.078 146.891 78.938 146.891C65.229 146.891 54.938 158.1 54.938 170.891C54.938 177.031 57.281 183.172 61.969 187.859L169.584 295.473C172.483 298.372 173.933 302.172 173.933 305.973C173.933 309.773 172.483 313.573 169.584 316.473L169.584 316.473C166.684 319.372 162.884 320.822 159.084 320.822C155.284 320.822 151.483 319.372 148.584 316.473L59.281 227.172C54.594 222.484 48.453 220.141 42.312 220.141C28.604 220.141 18.312 231.35 18.312 244.141C18.312 250.281 20.656 256.422 25.344 261.109L114.646 350.41C117.546 353.31 118.996 357.11 118.996 360.91C118.996 364.711 117.546 368.511 114.646 371.41L114.646 371.41C111.747 374.31 107.947 375.76 104.146 375.76C100.346 375.76 96.546 374.31 93.646 371.41L40.969 318.734C36.281 314.047 30.141 311.703 24 311.703C10.291 311.703 0 322.912 0 335.703C0 341.844 2.344 347.984 7.031 352.672C112.553 458.193 151.264 512 232.312 512C318.051 512 384 440.914 384 357.547Z" />
            <path d="M319.994 0C311.15 0 303.994 7.156 303.994 16V80C303.994 88.844 311.15 96 319.994 96S335.994 88.844 335.994 80V16C335.994 7.156 328.838 0 319.994 0ZM383.432 96C388.557 96 393.588 93.547 396.682 88.984L429.244 40.984C431.098 38.238 431.988 35.119 431.988 32.033C431.988 23.086 424.715 15.996 416.018 15.996C410.893 15.996 405.844 18.461 402.744 23.016L370.182 71.016C368.328 73.762 367.438 76.879 367.438 79.967C367.438 88.885 374.672 96 383.432 96ZM237.244 23.016C234.145 18.455 229.102 15.984 223.977 15.984C215.312 15.984 208 23.059 208 32.033C208 35.119 208.891 38.238 210.744 40.984L243.307 88.984C246.4 93.547 251.432 96 256.557 96C265.318 96 272.551 88.883 272.551 79.967C272.551 76.879 271.66 73.762 269.807 71.016L237.244 23.016ZM479.994 160C462.307 160 447.994 174.328 447.994 192V268.141L415.994 236.141V357.547C415.994 451.555 352.688 499.023 337.67 509.791C345.131 510.922 352.617 512 360.307 512C446.045 512 511.994 440.914 511.994 357.547V192C511.994 174.328 497.682 160 479.994 160Z" />
        </Icon>
    </>
}