
import { Icon } from "../../index";

/**
 * A component that renders the `hands-clapping` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-clapping?s=solid hands-clapping}
 * @preview ![hands-clapping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgOTZDMzI4Ljg0NCA5NiAzMzYgODguODQ0IDMzNiA4MFYxNkMzMzYgNy4xNTYgMzI4Ljg0NCAwIDMyMCAwUzMwNCA3LjE1NiAzMDQgMTZWODBDMzA0IDg4Ljg0NCAzMTEuMTU2IDk2IDMyMCA5NlpNMzgzLjQzOCA5NkMzODguNTYyIDk2IDM5My41OTQgOTMuNTQ3IDM5Ni42ODggODguOTg0TDQyOS4yNSA0MC45ODRDNDMxLjEwNCAzOC4yMzggNDMxLjk5NCAzNS4xMTkgNDMxLjk5NCAzMi4wMzNDNDMxLjk5NCAyMy4wODYgNDI0LjcyMSAxNS45OTYgNDE2LjAyMyAxNS45OTZDNDEwLjg5OCAxNS45OTYgNDA1Ljg1IDE4LjQ2MSA0MDIuNzUgMjMuMDE2TDM3MC4xODggNzEuMDE2QzM2OC4zMzQgNzMuNzYyIDM2Ny40NDMgNzYuODc5IDM2Ny40NDMgNzkuOTY3QzM2Ny40NDMgODguODg1IDM3NC42NzggOTYgMzgzLjQzOCA5NlpNMzg0IDM1Ny41NDdMMzg0IDE5My42ODZDMzg0IDE4Ny42NyAzNzkuMzI4IDE2MCAzNTIgMTYwQzMzNC4zMTIgMTYwIDMyMCAxNzQuMzI4IDMyMCAxOTJWMjY4LjE0MUwxNjkuMTU2IDExNy4yOTdDMTY0LjQ2OSAxMTIuNjA5IDE1OC4zMjggMTEwLjI2NiAxNTIuMTg4IDExMC4yNjZDMTM4LjQ3OSAxMTAuMjY2IDEyOC4xODggMTIxLjQ3NSAxMjguMTg4IDEzNC4yNjZDMTI4LjE4OCAxNDAuNDA2IDEzMC41MzEgMTQ2LjU0NyAxMzUuMjE5IDE1MS4yMzRMMjI0LjUyMSAyNDAuNTM1QzIyNy40MjEgMjQzLjQzNSAyMjguODcxIDI0Ny4yMzUgMjI4Ljg3MSAyNTEuMDM1QzIyOC44NzEgMjU0LjgzNiAyMjcuNDIxIDI1OC42MzYgMjI0LjUyMSAyNjEuNTM1TDIyNC41MjEgMjYxLjUzNUMyMjEuNjIyIDI2NC40MzUgMjE3LjgyMiAyNjUuODg0IDIxNC4wMjEgMjY1Ljg4NEMyMTAuMjIxIDI2NS44ODQgMjA2LjQyMSAyNjQuNDM1IDIwMy41MjIgMjYxLjUzNUw5NS45MDYgMTUzLjkyMkM5MS4yMTkgMTQ5LjIzNCA4NS4wNzggMTQ2Ljg5MSA3OC45MzggMTQ2Ljg5MUM2NS4yMjkgMTQ2Ljg5MSA1NC45MzggMTU4LjEgNTQuOTM4IDE3MC44OTFDNTQuOTM4IDE3Ny4wMzEgNTcuMjgxIDE4My4xNzIgNjEuOTY5IDE4Ny44NTlMMTY5LjU4NCAyOTUuNDczQzE3Mi40ODMgMjk4LjM3MiAxNzMuOTMzIDMwMi4xNzIgMTczLjkzMyAzMDUuOTczQzE3My45MzMgMzA5Ljc3MyAxNzIuNDgzIDMxMy41NzMgMTY5LjU4NCAzMTYuNDczTDE2OS41ODQgMzE2LjQ3M0MxNjYuNjg0IDMxOS4zNzIgMTYyLjg4NCAzMjAuODIyIDE1OS4wODQgMzIwLjgyMkMxNTUuMjg0IDMyMC44MjIgMTUxLjQ4MyAzMTkuMzcyIDE0OC41ODQgMzE2LjQ3M0w1OS4yODEgMjI3LjE3MkM1NC41OTQgMjIyLjQ4NCA0OC40NTMgMjIwLjE0MSA0Mi4zMTIgMjIwLjE0MUMyOC42MDQgMjIwLjE0MSAxOC4zMTIgMjMxLjM1IDE4LjMxMiAyNDQuMTQxQzE4LjMxMiAyNTAuMjgxIDIwLjY1NiAyNTYuNDIyIDI1LjM0NCAyNjEuMTA5TDExNC42NDYgMzUwLjQxQzExNy41NDYgMzUzLjMxIDExOC45OTYgMzU3LjExIDExOC45OTYgMzYwLjkxQzExOC45OTYgMzY0LjcxMSAxMTcuNTQ2IDM2OC41MTEgMTE0LjY0NiAzNzEuNDFMMTE0LjY0NiAzNzEuNDFDMTExLjc0NyAzNzQuMzEgMTA3Ljk0NyAzNzUuNzYgMTA0LjE0NiAzNzUuNzZDMTAwLjM0NiAzNzUuNzYgOTYuNTQ2IDM3NC4zMSA5My42NDYgMzcxLjQxTDQwLjk2OSAzMTguNzM0QzM2LjI4MSAzMTQuMDQ3IDMwLjE0MSAzMTEuNzAzIDI0IDMxMS43MDNDMTAuMjkxIDMxMS43MDMgMCAzMjIuOTEyIDAgMzM1LjcwM0MwIDM0MS44NDQgMi4zNDQgMzQ3Ljk4NCA3LjAzMSAzNTIuNjcyQzExMi41NTMgNDU4LjE5MyAxNTEuMjY0IDUxMiAyMzIuMzEyIDUxMkMzMTguMDUxIDUxMiAzODQgNDQwLjkxNCAzODQgMzU3LjU0N1pNMjQzLjMxMiA4OC45ODRDMjQ2LjQwNiA5My41NDcgMjUxLjQzOCA5NiAyNTYuNTYyIDk2QzI2NS4zMjQgOTYgMjcyLjU1NyA4OC44ODMgMjcyLjU1NyA3OS45NjdDMjcyLjU1NyA3Ni44NzkgMjcxLjY2NiA3My43NjIgMjY5LjgxMiA3MS4wMTZMMjM3LjI1IDIzLjAxNkMyMzQuMTUgMTguNDU1IDIyOS4xMDcgMTUuOTg0IDIyMy45ODIgMTUuOTg0QzIxNS4zMTggMTUuOTg0IDIwOC4wMDYgMjMuMDU5IDIwOC4wMDYgMzIuMDMzQzIwOC4wMDYgMzUuMTE5IDIwOC44OTYgMzguMjM4IDIxMC43NSA0MC45ODRMMjQzLjMxMiA4OC45ODRaTTQ4MCAxNjBDNDYyLjMxMiAxNjAgNDQ4IDE3NC4zMjggNDQ4IDE5MlYyNjguMTQxTDQxNiAyMzYuMTQxVjM1Ny41NDdDNDE2IDQ1MS41NTUgMzUyLjY5MyA0OTkuMDIzIDMzNy42NzYgNTA5Ljc5MUMzNDUuMTM3IDUxMC45MjIgMzUyLjYyMyA1MTIgMzYwLjMxMiA1MTJDNDQ2LjA1MSA1MTIgNTEyIDQ0MC45MTQgNTEyIDM1Ny41NDdWMTkyQzUxMiAxNzQuMzI4IDQ5Ny42ODggMTYwIDQ4MCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
const HandsClapping: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 96C328.844 96 336 88.844 336 80V16C336 7.156 328.844 0 320 0S304 7.156 304 16V80C304 88.844 311.156 96 320 96ZM383.438 96C388.562 96 393.594 93.547 396.688 88.984L429.25 40.984C431.104 38.238 431.994 35.119 431.994 32.033C431.994 23.086 424.721 15.996 416.023 15.996C410.898 15.996 405.85 18.461 402.75 23.016L370.188 71.016C368.334 73.762 367.443 76.879 367.443 79.967C367.443 88.885 374.678 96 383.438 96ZM384 357.547L384 193.686C384 187.67 379.328 160 352 160C334.312 160 320 174.328 320 192V268.141L169.156 117.297C164.469 112.609 158.328 110.266 152.188 110.266C138.479 110.266 128.188 121.475 128.188 134.266C128.188 140.406 130.531 146.547 135.219 151.234L224.521 240.535C227.421 243.435 228.871 247.235 228.871 251.035C228.871 254.836 227.421 258.636 224.521 261.535L224.521 261.535C221.622 264.435 217.822 265.884 214.021 265.884C210.221 265.884 206.421 264.435 203.522 261.535L95.906 153.922C91.219 149.234 85.078 146.891 78.938 146.891C65.229 146.891 54.938 158.1 54.938 170.891C54.938 177.031 57.281 183.172 61.969 187.859L169.584 295.473C172.483 298.372 173.933 302.172 173.933 305.973C173.933 309.773 172.483 313.573 169.584 316.473L169.584 316.473C166.684 319.372 162.884 320.822 159.084 320.822C155.284 320.822 151.483 319.372 148.584 316.473L59.281 227.172C54.594 222.484 48.453 220.141 42.312 220.141C28.604 220.141 18.312 231.35 18.312 244.141C18.312 250.281 20.656 256.422 25.344 261.109L114.646 350.41C117.546 353.31 118.996 357.11 118.996 360.91C118.996 364.711 117.546 368.511 114.646 371.41L114.646 371.41C111.747 374.31 107.947 375.76 104.146 375.76C100.346 375.76 96.546 374.31 93.646 371.41L40.969 318.734C36.281 314.047 30.141 311.703 24 311.703C10.291 311.703 0 322.912 0 335.703C0 341.844 2.344 347.984 7.031 352.672C112.553 458.193 151.264 512 232.312 512C318.051 512 384 440.914 384 357.547ZM243.312 88.984C246.406 93.547 251.438 96 256.562 96C265.324 96 272.557 88.883 272.557 79.967C272.557 76.879 271.666 73.762 269.812 71.016L237.25 23.016C234.15 18.455 229.107 15.984 223.982 15.984C215.318 15.984 208.006 23.059 208.006 32.033C208.006 35.119 208.896 38.238 210.75 40.984L243.312 88.984ZM480 160C462.312 160 448 174.328 448 192V268.141L416 236.141V357.547C416 451.555 352.693 499.023 337.676 509.791C345.137 510.922 352.623 512 360.312 512C446.051 512 512 440.914 512 357.547V192C512 174.328 497.688 160 480 160Z" />
    </Icon>
);

export default HandsClapping;