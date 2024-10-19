
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-snowboarding` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowboarding?s=thin person-snowboarding}
 * @preview ![person-snowboarding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTkuMjA2IDE5OC4zODdMMzg3Ljc4MiAxMTQuOTUxQzM3My45OTcgMTA0LjYyNyAzNTguNjQ0IDk2LjU4NiAzNDIuMzEyIDkxLjEzMUwyNzguNjc3IDY5Ljg3OUwyNTIuNTQ4IDE3Ljc1MkMyNDYuMzQ1IDUuMzQ2IDIyOC40MTEgLTUuODczIDIwOS42NjcgMy41QzE5My43ODggMTEuMzc1IDE4Ny40MTMgMzAuNjI3IDE5NS4yOSA0Ni4zNzdMMjI0LjQxOSAxMDQuNTA2QzIzMC4wODUgMTE1LjgxMiAyMzkuOTkzIDEyNC40MTYgMjUxLjk4IDEyOC40NDFMMjY4LjU1IDEzNC4wMDhMMjI3LjI5NCAxNTQuNjM1QzIwNS42MTEgMTY1LjQ3NSAxOTEuOTEzIDE4Ny42MzkgMTkxLjkxMyAyMTEuODgzVjI2NC44OTFMMTE3Ljg5IDI4OC4wMThDMTAxLjEyMiAyOTMuNjE1IDkyLjA2NiAzMTEuNzQ2IDk3LjY1NCAzMjguNTE4QzEwMi4xMjYgMzQxLjkzNiAxMTQuNjIgMzUwLjQyMiAxMjguMDI3IDM1MC40MjJDMTMxLjM4OCAzNTAuNDIyIDEzNC44MDQgMzQ5Ljg4OSAxMzguMTY3IDM0OC43NjZMMjIzLjAwOSAzMjIuMDMxQzI0Mi41OTMgMzE1LjQ5NCAyNTUuNzk4IDI5Ny4xNjIgMjU1Ljc5OCAyNzYuNTE4VjI1Ni4wMTZMMzE2LjMwOCAzMDEuMjY4TDI4Ny4zNjMgMzkzLjI4MUMyODMuNjcxIDQxMC41OCAyOTQuNzA0IDQyNy41OTQgMzEyLjAwMyA0MzEuMjgxTDMxMi4xNjMgNDMxLjMxNEMzMzAuNjkzIDQzNS4yNzUgMzQ2LjcxNiA0MjIuNzA1IDM1MC4xNDYgNDA2LjcxNUwzODEuMzA0IDMwNC42ODlDMzg1LjIyOCAyODYuMzk1IDM3OC4xNTUgMjY3LjQ4OCAzNjMuMTg3IDI1Ni4yNjZMMzExLjE4MSAyMTcuMjY0TDM3Ny4xODkgMTg2Ljc2Mkw0NjAuNyAyNDkuNjQxQzQ3NS42OTggMjYwLjQ4NiA0OTUuMTY3IDI1Ni45NDUgNTA1LjU4MyAyNDMuMjY2QzUxNi4yMSAyMjkuMTM5IDUxMy4zMzMgMjA5LjAxNCA0OTkuMjA2IDE5OC4zODdaTTQ5Mi44NTUgMjMzLjU3QzQ4OC4zOCAyMzkuNDQ1IDQ3OC43MzggMjQyLjkzNiA0NzAuMzI1IDIzNi44NTVMMzg2LjgxNCAxNzMuOTc3QzM4MS42NjkgMTcwLjEwNSAzNzUuMzIzIDE2OS45OTggMzcwLjQ3OCAxNzIuMjM0TDMwNC40NyAyMDIuNzM2QzI5OS4zNTcgMjA1LjEgMjk1Ljg2MyAyMDkuOTc5IDI5NS4yNzEgMjE1LjU4MkMyOTQuNjc3IDIyMS4xODQgMjk3LjA3NSAyMjYuNjg0IDMwMS41ODEgMjMwLjA2NEwzNTMuNTg5IDI2OS4wNjZDMzYzLjUyNyAyNzYuNTIxIDM2OC4yNjUgMjg5LjE4NiAzNjYuMDAzIDMwMC4wMTRMMzM0LjUwMSA0MDMuMzU5QzMyOS45MDkgNDI0Ljc1NiAyOTkuMjEgNDE2LjM4NSAzMDIuNjI0IDM5OC4wODJMMzMxLjU3MiAzMDYuMDdDMzMzLjYxMSAyOTkuNTg2IDMzMS4zMzMgMjkyLjUyMyAzMjUuODkgMjg4LjQ1M0wyNjUuMzggMjQzLjIwMUMyNjIuMjA4IDI0MC44MyAyNTUuNjY5IDIzOC4xODQgMjQ4LjYzNCAyNDEuNzA5QzI0My4yMTggMjQ0LjQyMiAyMzkuNzk4IDI0OS45NTkgMjM5Ljc5OCAyNTYuMDE2VjI3Ni41MThDMjM5Ljc5OCAyOTAuMjk5IDIzMS4wMTUgMzAyLjQ4OCAyMTguMiAzMDYuNzcxTDEzMy4xMDMgMzMzLjU4NkMxMTMuMDYyIDM0MC4yNzUgMTAyLjg5NiAzMDkuODk4IDEyMi42NjEgMzAzLjI4OUwxOTYuNjg1IDI4MC4xNjRDMjAzLjM2NCAyNzguMDc4IDIwNy45MTMgMjcxLjg4OSAyMDcuOTEzIDI2NC44OTFWMjExLjg4M0MyMDcuOTEzIDE5My41OCAyMTguMDgxIDE3Ny4xMzEgMjM0LjQ0OCAxNjguOTQ1TDI3NS43MDQgMTQ4LjMyQzI4MS40ODggMTQ1LjQzIDI4NC45NjIgMTM5LjM0MiAyODQuNTExIDEzMi44OTNDMjg0LjA2MiAxMjYuNDQzIDI3OS43NzMgMTIwLjg5OCAyNzMuNjQ0IDExOC44NEwyNTcuMDczIDExMy4yNzNDMjQ5LjAzOCAxMTAuNTc0IDI0Mi41MjEgMTA0LjkxNCAyMzguNzI0IDk3LjMzOEwyMDkuNjAxIDM5LjIyMUMyMDUuNzA0IDMxLjQzIDIwOC43NjUgMjEuODExIDIxNi44MjIgMTcuODEzQzIyNy45NDMgMTIuMjUgMjM2LjE4NyAyMC44MDcgMjM4LjI0NSAyNC45MjJMMjY0LjM3NCA3Ny4wNDlDMjY2LjI3MyA4MC44MzYgMjY5LjU5MyA4My43MTUgMjczLjYxMSA4NS4wNTdMMzM3LjI0MyAxMDYuMzA3QzM1MS45NzggMTExLjIyOSAzNjUuNzU1IDExOC40NDUgMzc4LjE5MyAxMjcuNzU4TDQ4OS41ODkgMjExLjE3NkM0OTYuNzkgMjE2LjU5IDQ5Ny45OTUgMjI2LjczMiA0OTIuODU1IDIzMy41N1pNNDc0LjM0MyA0NzcuMjQ4QzQ1Ni40NTIgNDk1LjE1NCA0MjkuNjU1IDUwMC44NzUgNDA2LjAzIDQ5MS43NDhMNTcuNjEzIDM1Ny43NEMzNi41MTkgMzQ5LjY0NiAyMS4xMTMgMzMwLjczOCAxNy40MDkgMzA4LjQ1N0wxNS44OTQgMjk5LjQyNEMxNS4xNTkgMjk1LjA0OSAxMS4wMzQgMjkxLjk1NSA2LjY3NSAyOTIuODYxQzIuMzE2IDI5My41OCAtMC42MjIgMjk3LjcwNSAwLjExMyAzMDIuMDQ5TDEuNjI4IDMxMS4wODJDNi4yNTMgMzM4Ljk1OSAyNS41MDMgMzYyLjU1MyA1MS44NjMgMzcyLjY4TDQwMC4yOCA1MDYuNjg4QzQwOS42MjQgNTEwLjI4MSA0MTkuMzQzIDUxMiA0MjguOTg0IDUxMkM0NDkuODc0IDUxMiA0NzAuMzc0IDUwMy44NDQgNDg1LjY1NSA0ODguNTYxQzQ4OC43OCA0ODUuNDM2IDQ4OC43OCA0ODAuMzczIDQ4NS42NTUgNDc3LjI0OFM0NzcuNDY4IDQ3NC4xMjMgNDc0LjM0MyA0NzcuMjQ4Wk00MjcuOTk5IDEwNC4wMDZDNDU2LjcwNiAxMDQuMDA2IDQ3OS45OTkgODAuNzE1IDQ3OS45OTkgNTIuMDA0UzQ1Ni43MDYgMCA0MjcuOTk5IDBDMzk5LjI5IDAgMzc1Ljk5OSAyMy4yOTMgMzc1Ljk5OSA1Mi4wMDRTMzk5LjI5IDEwNC4wMDYgNDI3Ljk5OSAxMDQuMDA2Wk00MjcuOTk5IDE2LjAwMkM0NDcuODQ5IDE2LjAwMiA0NjMuOTk5IDMyLjE1IDQ2My45OTkgNTIuMDA0QzQ2My45OTkgNzEuODU0IDQ0Ny44NDkgODguMDA2IDQyNy45OTkgODguMDA2UzM5MS45OTkgNzEuODU0IDM5MS45OTkgNTIuMDA0QzM5MS45OTkgMzIuMTUgNDA4LjE1IDE2LjAwMiA0MjcuOTk5IDE2LjAwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonSnowboarding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M499.206 198.387L387.782 114.951C373.997 104.627 358.644 96.586 342.312 91.131L278.677 69.879L252.548 17.752C246.345 5.346 228.411 -5.873 209.667 3.5C193.788 11.375 187.413 30.627 195.29 46.377L224.419 104.506C230.085 115.812 239.993 124.416 251.98 128.441L268.55 134.008L227.294 154.635C205.611 165.475 191.913 187.639 191.913 211.883V264.891L117.89 288.018C101.122 293.615 92.066 311.746 97.654 328.518C102.126 341.936 114.62 350.422 128.027 350.422C131.388 350.422 134.804 349.889 138.167 348.766L223.009 322.031C242.593 315.494 255.798 297.162 255.798 276.518V256.016L316.308 301.268L287.363 393.281C283.671 410.58 294.704 427.594 312.003 431.281L312.163 431.314C330.693 435.275 346.716 422.705 350.146 406.715L381.304 304.689C385.228 286.395 378.155 267.488 363.187 256.266L311.181 217.264L377.189 186.762L460.7 249.641C475.698 260.486 495.167 256.945 505.583 243.266C516.21 229.139 513.333 209.014 499.206 198.387ZM492.855 233.57C488.38 239.445 478.738 242.936 470.325 236.855L386.814 173.977C381.669 170.105 375.323 169.998 370.478 172.234L304.47 202.736C299.357 205.1 295.863 209.979 295.271 215.582C294.677 221.184 297.075 226.684 301.581 230.064L353.589 269.066C363.527 276.521 368.265 289.186 366.003 300.014L334.501 403.359C329.909 424.756 299.21 416.385 302.624 398.082L331.572 306.07C333.611 299.586 331.333 292.523 325.89 288.453L265.38 243.201C262.208 240.83 255.669 238.184 248.634 241.709C243.218 244.422 239.798 249.959 239.798 256.016V276.518C239.798 290.299 231.015 302.488 218.2 306.771L133.103 333.586C113.062 340.275 102.896 309.898 122.661 303.289L196.685 280.164C203.364 278.078 207.913 271.889 207.913 264.891V211.883C207.913 193.58 218.081 177.131 234.448 168.945L275.704 148.32C281.488 145.43 284.962 139.342 284.511 132.893C284.062 126.443 279.773 120.898 273.644 118.84L257.073 113.273C249.038 110.574 242.521 104.914 238.724 97.338L209.601 39.221C205.704 31.43 208.765 21.811 216.822 17.813C227.943 12.25 236.187 20.807 238.245 24.922L264.374 77.049C266.273 80.836 269.593 83.715 273.611 85.057L337.243 106.307C351.978 111.229 365.755 118.445 378.193 127.758L489.589 211.176C496.79 216.59 497.995 226.732 492.855 233.57ZM474.343 477.248C456.452 495.154 429.655 500.875 406.03 491.748L57.613 357.74C36.519 349.646 21.113 330.738 17.409 308.457L15.894 299.424C15.159 295.049 11.034 291.955 6.675 292.861C2.316 293.58 -0.622 297.705 0.113 302.049L1.628 311.082C6.253 338.959 25.503 362.553 51.863 372.68L400.28 506.688C409.624 510.281 419.343 512 428.984 512C449.874 512 470.374 503.844 485.655 488.561C488.78 485.436 488.78 480.373 485.655 477.248S477.468 474.123 474.343 477.248ZM427.999 104.006C456.706 104.006 479.999 80.715 479.999 52.004S456.706 0 427.999 0C399.29 0 375.999 23.293 375.999 52.004S399.29 104.006 427.999 104.006ZM427.999 16.002C447.849 16.002 463.999 32.15 463.999 52.004C463.999 71.854 447.849 88.006 427.999 88.006S391.999 71.854 391.999 52.004C391.999 32.15 408.15 16.002 427.999 16.002Z" />
        </Icon>
    </>
}