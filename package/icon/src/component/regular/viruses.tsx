
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `viruses` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/viruses?s=regular viruses}
 * @preview ![viruses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTkyQzIxNS4xNjQgMTkyIDIwOCAxOTkuMTY0IDIwOCAyMDhTMjE1LjE2NCAyMjQgMjI0IDIyNFMyNDAgMjE2LjgzNiAyNDAgMjA4UzIzMi44MzYgMTkyIDIyNCAxOTJaTTE3NiAxNTJDMTYyLjc0NCAxNTIgMTUyIDE2Mi43NDYgMTUyIDE3NlMxNjIuNzQ0IDIwMCAxNzYgMjAwUzIwMCAxODkuMjU0IDIwMCAxNzZTMTg5LjI1NiAxNTIgMTc2IDE1MlpNNjI0IDM1Mkg2MTEuODgxQzU4My4zNzEgMzUyIDU2OS4wOTQgMzE3LjUzMSA1ODkuMjUyIDI5Ny4zNzNMNTk3LjgyOCAyODguNzk3QzYwNC4wNzggMjgyLjU0NyA2MDQuMDc4IDI3Mi40MjIgNTk3LjgyOCAyNjYuMTcyQzU5NC43MDMgMjYzLjA0NyA1OTAuNjA5IDI2MS40ODQgNTg2LjUxNiAyNjEuNDg0UzU3OC4zMjggMjYzLjA0NyA1NzUuMjAzIDI2Ni4xNzJMNTY2LjYyNyAyNzQuNzQ4QzU2MC4xMDkgMjgxLjI2NiA1NTIuMDk0IDI4NC4xODQgNTQ0LjIzMiAyODQuMTg0QzUyNy43ODEgMjg0LjE4NCA1MTIgMjcxLjQxIDUxMiAyNTIuMTIxVjI0MEM1MTIgMjMxLjE1NiA1MDQuODQ0IDIyNCA0OTYgMjI0UzQ4MCAyMzEuMTU2IDQ4MCAyNDBWMjUyLjEyMUM0ODAgMjcxLjQwOCA0NjQuMjE5IDI4NC4xODQgNDQ3Ljc3IDI4NC4xODRDNDM5LjkwNiAyODQuMTg0IDQzMS44OTMgMjgxLjI2OCA0MjUuMzczIDI3NC43NDhMNDE2Ljc5NyAyNjYuMTcyQzQxMy42NzIgMjYzLjA0NyA0MDkuNTc4IDI2MS40ODQgNDA1LjQ4NCAyNjEuNDg0UzM5Ny4yOTcgMjYzLjA0NyAzOTQuMTcyIDI2Ni4xNzJDMzg3LjkyMiAyNzIuNDIyIDM4Ny45MjIgMjgyLjU0NyAzOTQuMTcyIDI4OC43OTdMNDAyLjc0OCAyOTcuMzczQzQyMi45MDYgMzE3LjUzMSA0MDguNjI5IDM1MiAzODAuMTE5IDM1MkgzNjhDMzU5LjE1NiAzNTIgMzUyIDM1OS4xNTYgMzUyIDM2OFMzNTkuMTU2IDM4NCAzNjggMzg0SDM4MC4xMTlDNDA4LjYyOSAzODQgNDIyLjkwNiA0MTguNDY5IDQwMi43NDggNDM4LjYyN0wzOTQuMTcyIDQ0Ny4yMDNDMzg3LjkyMiA0NTMuNDUzIDM4Ny45MjIgNDYzLjU3OCAzOTQuMTcyIDQ2OS44MjhDMzk3LjI5NyA0NzIuOTUzIDQwMS4zOTEgNDc0LjUxNiA0MDUuNDg0IDQ3NC41MTZTNDEzLjY3MiA0NzIuOTUzIDQxNi43OTcgNDY5LjgyOEw0MjUuMzczIDQ2MS4yNTJDNDMxLjg5MSA0NTQuNzM0IDQzOS45MDYgNDUxLjgxNiA0NDcuNzcgNDUxLjgxNkM0NjQuMjE5IDQ1MS44MTYgNDgwIDQ2NC41OSA0ODAgNDgzLjg3OVY0OTZDNDgwIDUwNC44NDQgNDg3LjE1NiA1MTIgNDk2IDUxMlM1MTIgNTA0Ljg0NCA1MTIgNDk2VjQ4My44NzlDNTEyIDQ2NC41OTIgNTI3Ljc4MSA0NTEuODE2IDU0NC4yMzIgNDUxLjgxNkM1NTIuMDk2IDQ1MS44MTYgNTYwLjEwNyA0NTQuNzMyIDU2Ni42MjcgNDYxLjI1Mkw1NzUuMjAzIDQ2OS44MjhDNTc4LjMyOCA0NzIuOTUzIDU4Mi40MjIgNDc0LjUxNiA1ODYuNTE2IDQ3NC41MTZTNTk0LjcwMyA0NzIuOTUzIDU5Ny44MjggNDY5LjgyOEM2MDQuMDc4IDQ2My41NzggNjA0LjA3OCA0NTMuNDUzIDU5Ny44MjggNDQ3LjIwM0w1ODkuMjUyIDQzOC42MjdDNTY5LjA5NCA0MTguNDY5IDU4My4zNzEgMzg0IDYxMS44ODEgMzg0SDYyNEM2MzIuODQ0IDM4NCA2NDAgMzc2Ljg0NCA2NDAgMzY4UzYzMi44NDQgMzUyIDYyNCAzNTJaTTQ2NCAzOTJDNDUwLjc0NiAzOTIgNDQwIDM4MS4yNTQgNDQwIDM2OEM0NDAgMzU0Ljc0NCA0NTAuNzQ2IDM0NCA0NjQgMzQ0UzQ4OCAzNTQuNzQ0IDQ4OCAzNjhDNDg4IDM4MS4yNTQgNDc3LjI1NCAzOTIgNDY0IDM5MlpNMzQ2LjUwNiAyMTMuMzM0SDM2Mi42NjZDMzc0LjQ1OSAyMTMuMzM0IDM4NCAyMDMuNzkxIDM4NCAxOTJTMzc0LjQ1OSAxNzAuNjY2IDM2Mi42NjYgMTcwLjY2NkgzNDYuNTA2QzMwOC40OTQgMTcwLjY2NiAyODkuNDU3IDEyNC43MDkgMzE2LjMzNiA5Ny44M0wzMjcuNzcxIDg2LjM5NkMzMzYuMTA0IDc4LjA2MyAzMzYuMTA0IDY0LjU2MyAzMjcuNzcxIDU2LjIyOUMzMjMuNjA0IDUyLjA2MyAzMTguMTQ2IDQ5Ljk4IDMxMi42ODcgNDkuOThTMzAxLjc3MSA1Mi4wNjIgMjk3LjYwNCA1Ni4yMjlMMjg2LjE3IDY3LjY2NEMyNzcuNDc5IDc2LjM1NSAyNjYuNzkxIDgwLjI0NiAyNTYuMzA5IDgwLjI0NkMyMzQuMzczIDgwLjI0NiAyMTMuMzM0IDYzLjIxNSAyMTMuMzM0IDM3LjQ5NFYyMS4zMzRDMjEzLjMzNCA5LjU0MSAyMDMuNzkxIDAgMTkyIDBTMTcwLjY2NiA5LjU0MSAxNzAuNjY2IDIxLjMzNFYzNy40OTRDMTcwLjY2NiA2My4yMTMgMTQ5LjYyNSA4MC4yNDYgMTI3LjY5MSA4MC4yNDZDMTE3LjIwNyA4MC4yNDYgMTA2LjUyMyA3Ni4zNTcgOTcuODMgNjcuNjY0TDg2LjM5NiA1Ni4yMjlDODIuMjI5IDUyLjA2MiA3Ni43NzEgNDkuOTggNzEuMzEyIDQ5Ljk4UzYwLjM5NiA1Mi4wNjIgNTYuMjI5IDU2LjIyOUM0Ny44OTYgNjQuNTYyIDQ3Ljg5NiA3OC4wNjIgNTYuMjI5IDg2LjM5Nkw2Ny42NjQgOTcuODNDOTQuNTQzIDEyNC43MDkgNzUuNTA2IDE3MC42NjYgMzcuNDk0IDE3MC42NjZIMjEuMzM0QzkuNTQxIDE3MC42NjYgMCAxODAuMjA5IDAgMTkyUzkuNTQxIDIxMy4zMzQgMjEuMzM0IDIxMy4zMzRIMzcuNDk0Qzc1LjUwNiAyMTMuMzM0IDk0LjU0MyAyNTkuMjkxIDY3LjY2NCAyODYuMTdMNTYuMjI5IDI5Ny42MDRDNDcuODk2IDMwNS45MzggNDcuODk2IDMxOS40MzggNTYuMjI5IDMyNy43NzFDNjAuMzk2IDMzMS45MzggNjUuODU0IDMzNC4wMjEgNzEuMzEyIDMzNC4wMjFTODIuMjI5IDMzMS45MzggODYuMzk2IDMyNy43NzFMOTcuODMgMzE2LjMzNkMxMDYuNTIxIDMwNy42NDUgMTE3LjIwOSAzMDMuNzU0IDEyNy42OTEgMzAzLjc1NEMxNDkuNjI3IDMwMy43NTQgMTcwLjY2NiAzMjAuNzg1IDE3MC42NjYgMzQ2LjUwNlYzNjIuNjY2QzE3MC42NjYgMzc0LjQ1OSAxODAuMjA5IDM4NCAxOTIgMzg0UzIxMy4zMzQgMzc0LjQ1OSAyMTMuMzM0IDM2Mi42NjZWMzQ2LjUwNkMyMTMuMzM0IDMyMC43ODcgMjM0LjM3NSAzMDMuNzU0IDI1Ni4zMDkgMzAzLjc1NEMyNjYuNzkzIDMwMy43NTQgMjc3LjQ3NyAzMDcuNjQzIDI4Ni4xNyAzMTYuMzM2TDI5Ny42MDQgMzI3Ljc3MUMzMDEuNzcxIDMzMS45MzggMzA3LjIyOSAzMzQuMDIxIDMxMi42ODcgMzM0LjAyMVMzMjMuNjA0IDMzMS45MzggMzI3Ljc3MSAzMjcuNzcxQzMzNi4xMDQgMzE5LjQzOCAzMzYuMTA0IDMwNS45MzggMzI3Ljc3MSAyOTcuNjA0TDMxNi4zMzYgMjg2LjE3QzI4OS40NTcgMjU5LjI5MSAzMDguNDk0IDIxMy4zMzQgMzQ2LjUwNiAyMTMuMzM0Wk0yNjIuNzQyIDIyMS4zMDNDMjU4LjExMyAyMzIuNDc5IDI1NS44MzggMjQ0LjE3IDI1NS43OTUgMjU1Ljc1NkMyMzAuOTEgMjU1Ljg5NSAyMDguMzYxIDI2Ni4wNDcgMTkyIDI4Mi4zNzVDMTc1LjYzOSAyNjYuMDQ3IDE1My4wOSAyNTUuODk1IDEyOC4yMDUgMjU1Ljc1NkMxMjguMTYyIDI0NC4xNyAxMjUuODg3IDIzMi40NzkgMTIxLjI1OCAyMjEuMzAzQzExNi42MjMgMjEwLjExMyAxMDkuOTU1IDIwMC4yMjkgMTAxLjc3OSAxOTJDMTA5Ljk1NSAxODMuNzcxIDExNi42MjMgMTczLjg4NyAxMjEuMjU4IDE2Mi42OTdDMTI1Ljg4NyAxNTEuNTIxIDEyOC4xNjIgMTM5LjgzIDEyOC4yMDUgMTI4LjI0NEMxNTMuMDkgMTI4LjEwNSAxNzUuNjM5IDExNy45NTMgMTkyIDEwMS42MjVDMjA4LjM2MSAxMTcuOTUzIDIzMC45MSAxMjguMTA1IDI1NS43OTUgMTI4LjI0NEMyNTUuODM4IDEzOS44MyAyNTguMTEzIDE1MS41MjEgMjYyLjc0MiAxNjIuNjk3QzI2Ny4zNzcgMTczLjg4NyAyNzQuMDQ1IDE4My43NzEgMjgyLjIyMSAxOTJDMjc0LjA0NSAyMDAuMjI5IDI2Ny4zNzcgMjEwLjExMyAyNjIuNzQyIDIyMS4zMDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Viruses(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 192C215.164 192 208 199.164 208 208S215.164 224 224 224S240 216.836 240 208S232.836 192 224 192ZM176 152C162.744 152 152 162.746 152 176S162.744 200 176 200S200 189.254 200 176S189.256 152 176 152ZM624 352H611.881C583.371 352 569.094 317.531 589.252 297.373L597.828 288.797C604.078 282.547 604.078 272.422 597.828 266.172C594.703 263.047 590.609 261.484 586.516 261.484S578.328 263.047 575.203 266.172L566.627 274.748C560.109 281.266 552.094 284.184 544.232 284.184C527.781 284.184 512 271.41 512 252.121V240C512 231.156 504.844 224 496 224S480 231.156 480 240V252.121C480 271.408 464.219 284.184 447.77 284.184C439.906 284.184 431.893 281.268 425.373 274.748L416.797 266.172C413.672 263.047 409.578 261.484 405.484 261.484S397.297 263.047 394.172 266.172C387.922 272.422 387.922 282.547 394.172 288.797L402.748 297.373C422.906 317.531 408.629 352 380.119 352H368C359.156 352 352 359.156 352 368S359.156 384 368 384H380.119C408.629 384 422.906 418.469 402.748 438.627L394.172 447.203C387.922 453.453 387.922 463.578 394.172 469.828C397.297 472.953 401.391 474.516 405.484 474.516S413.672 472.953 416.797 469.828L425.373 461.252C431.891 454.734 439.906 451.816 447.77 451.816C464.219 451.816 480 464.59 480 483.879V496C480 504.844 487.156 512 496 512S512 504.844 512 496V483.879C512 464.592 527.781 451.816 544.232 451.816C552.096 451.816 560.107 454.732 566.627 461.252L575.203 469.828C578.328 472.953 582.422 474.516 586.516 474.516S594.703 472.953 597.828 469.828C604.078 463.578 604.078 453.453 597.828 447.203L589.252 438.627C569.094 418.469 583.371 384 611.881 384H624C632.844 384 640 376.844 640 368S632.844 352 624 352ZM464 392C450.746 392 440 381.254 440 368C440 354.744 450.746 344 464 344S488 354.744 488 368C488 381.254 477.254 392 464 392ZM346.506 213.334H362.666C374.459 213.334 384 203.791 384 192S374.459 170.666 362.666 170.666H346.506C308.494 170.666 289.457 124.709 316.336 97.83L327.771 86.396C336.104 78.063 336.104 64.563 327.771 56.229C323.604 52.063 318.146 49.98 312.687 49.98S301.771 52.062 297.604 56.229L286.17 67.664C277.479 76.355 266.791 80.246 256.309 80.246C234.373 80.246 213.334 63.215 213.334 37.494V21.334C213.334 9.541 203.791 0 192 0S170.666 9.541 170.666 21.334V37.494C170.666 63.213 149.625 80.246 127.691 80.246C117.207 80.246 106.523 76.357 97.83 67.664L86.396 56.229C82.229 52.062 76.771 49.98 71.312 49.98S60.396 52.062 56.229 56.229C47.896 64.562 47.896 78.062 56.229 86.396L67.664 97.83C94.543 124.709 75.506 170.666 37.494 170.666H21.334C9.541 170.666 0 180.209 0 192S9.541 213.334 21.334 213.334H37.494C75.506 213.334 94.543 259.291 67.664 286.17L56.229 297.604C47.896 305.938 47.896 319.438 56.229 327.771C60.396 331.938 65.854 334.021 71.312 334.021S82.229 331.938 86.396 327.771L97.83 316.336C106.521 307.645 117.209 303.754 127.691 303.754C149.627 303.754 170.666 320.785 170.666 346.506V362.666C170.666 374.459 180.209 384 192 384S213.334 374.459 213.334 362.666V346.506C213.334 320.787 234.375 303.754 256.309 303.754C266.793 303.754 277.477 307.643 286.17 316.336L297.604 327.771C301.771 331.938 307.229 334.021 312.687 334.021S323.604 331.938 327.771 327.771C336.104 319.438 336.104 305.938 327.771 297.604L316.336 286.17C289.457 259.291 308.494 213.334 346.506 213.334ZM262.742 221.303C258.113 232.479 255.838 244.17 255.795 255.756C230.91 255.895 208.361 266.047 192 282.375C175.639 266.047 153.09 255.895 128.205 255.756C128.162 244.17 125.887 232.479 121.258 221.303C116.623 210.113 109.955 200.229 101.779 192C109.955 183.771 116.623 173.887 121.258 162.697C125.887 151.521 128.162 139.83 128.205 128.244C153.09 128.105 175.639 117.953 192 101.625C208.361 117.953 230.91 128.105 255.795 128.244C255.838 139.83 258.113 151.521 262.742 162.697C267.377 173.887 274.045 183.771 282.221 192C274.045 200.229 267.377 210.113 262.742 221.303Z" />
        </Icon>
    </>
}