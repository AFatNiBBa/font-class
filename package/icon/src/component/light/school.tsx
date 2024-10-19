
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `school` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=light school}
 * @preview ![school](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzIwSDI3MkMyNDUuNDkgMzIwIDIyNCAzNDEuNDkgMjI0IDM2OFY0OTZDMjI0IDUwNC43OTkgMjMxLjE5OSA1MTIgMjQwIDUxMlMyNTYgNTA0Ljc5OSAyNTYgNDk2VjM2OEMyNTYgMzU5LjE2MiAyNjMuMTY0IDM1MiAyNzIgMzUySDM2OEMzNzYuODM2IDM1MiAzODQgMzU5LjE2MiAzODQgMzY4VjQ5NkMzODQgNTA0Ljc5OSAzOTEuMTk5IDUxMiA0MDAgNTEyUzQxNiA1MDQuNzk5IDQxNiA0OTZWMzY4QzQxNiAzNDEuNDkgMzk0LjUxIDMyMCAzNjggMzIwWk03My44OTEgMTkzLjIxMUwyOS42ODggMjExLjQwNkMxMS42NTYgMjE4LjgxMiAwIDIzNi4yNSAwIDI1NS43ODFWNDk1LjE2NkMwIDUwMy4xMzUgNS40NTUgNTEwLjUxMiAxMy4zMjIgNTExLjc4M0MyMy4zNTIgNTEzLjQwNCAzMiA1MDUuNzIxIDMyIDQ5NlYyNTUuNzgxQzMyIDI0OS4yNzMgMzUuOTMyIDI0My40MDggNDEuOTUxIDI0MC45MzhMODYuMDY4IDIyMi44MThDOTQuMjUgMjE5LjQ1OSA5OC4xNTYgMjEwLjEwMiA5NC43OTMgMjAxLjkyMkM5MS40MjggMTkzLjc0MiA4Mi4wNjggMTg5Ljg0MiA3My44OTEgMTkzLjIxMVpNMzQ0IDE3NkgzMzZWMTY4QzMzNiAxNTkuMTk5IDMyOC44MDEgMTUyIDMyMCAxNTJTMzA0IDE1OS4xOTkgMzA0IDE2OFYyMDBDMzA0IDIwNC40IDMwNy42IDIwOCAzMTIgMjA4SDM0NEMzNTIuODAxIDIwOCAzNjAgMjAwLjc5OSAzNjAgMTkyQzM2MCAxODMuMTk5IDM1Mi44MDEgMTc2IDM0NCAxNzZaTTMyMCA5NkMyNjcgOTYgMjI0IDEzOSAyMjQgMTkyUzI2NyAyODggMzIwIDI4OFM0MTYgMjQ1IDQxNiAxOTJTMzczIDk2IDMyMCA5NlpNMzIwIDI1NkMyODQuNzUgMjU2IDI1NiAyMjcuMjUgMjU2IDE5MlMyODQuNzUgMTI4IDMyMCAxMjhTMzg0IDE1Ni43NSAzODQgMTkyUzM1NS4yNSAyNTYgMzIwIDI1NlpNNDk3Ljc1IDExMkwzMzcuNzUgNS4zNzVDMzMyLjM3NSAxLjc1IDMyNi4yNSAwIDMyMCAwUzMwNy42MjUgMS43NSAzMDIuMjUgNS4zNzVMMTQyLjI1IDExMkMxMzMuMzc1IDExOCAxMjggMTI4IDEyOCAxMzguNjI1VjQ5NkMxMjggNTA0Ljc5OSAxMzUuMTk5IDUxMiAxNDQgNTEyUzE2MCA1MDQuNzk5IDE2MCA0OTZWMTM4LjYyNUwzMjAgMzJMNDgwIDEzOC42MjVWNDk2QzQ4MCA1MDQuNzk5IDQ4Ny4xOTkgNTEyIDQ5NiA1MTJTNTEyIDUwNC43OTkgNTEyIDQ5NlYxMzguNjI1QzUxMiAxMjggNTA2LjYyNSAxMTggNDk3Ljc1IDExMlpNNjEwLjMxMiAyMTEuNDA2TDU2Ni4xMDkgMTkzLjIxMUM1NTcuOTMyIDE4OS44NDIgNTQ4LjU3MiAxOTMuNzQyIDU0NS4yMDcgMjAxLjkyMkM1NDEuODQ0IDIxMC4xMDIgNTQ1Ljc1IDIxOS40NTkgNTUzLjkzMiAyMjIuODE4TDU5OC4xMjUgMjQwLjk2OUM2MDQuMSAyNDMuNDIyIDYwOCAyNDkuMjQgNjA4IDI1NS42OTdWNDk1LjE2NkM2MDggNTAzLjEzNSA2MTMuNDU1IDUxMC41MTIgNjIxLjMyMiA1MTEuNzgzQzYzMS4zNTIgNTEzLjQwNCA2NDAgNTA1LjcyMSA2NDAgNDk2VjI1NS43ODFDNjQwIDIzNi4yNSA2MjguMzQ0IDIxOC44MTIgNjEwLjMxMiAyMTEuNDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function School(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M368 320H272C245.49 320 224 341.49 224 368V496C224 504.799 231.199 512 240 512S256 504.799 256 496V368C256 359.162 263.164 352 272 352H368C376.836 352 384 359.162 384 368V496C384 504.799 391.199 512 400 512S416 504.799 416 496V368C416 341.49 394.51 320 368 320ZM73.891 193.211L29.688 211.406C11.656 218.812 0 236.25 0 255.781V495.166C0 503.135 5.455 510.512 13.322 511.783C23.352 513.404 32 505.721 32 496V255.781C32 249.273 35.932 243.408 41.951 240.938L86.068 222.818C94.25 219.459 98.156 210.102 94.793 201.922C91.428 193.742 82.068 189.842 73.891 193.211ZM344 176H336V168C336 159.199 328.801 152 320 152S304 159.199 304 168V200C304 204.4 307.6 208 312 208H344C352.801 208 360 200.799 360 192C360 183.199 352.801 176 344 176ZM320 96C267 96 224 139 224 192S267 288 320 288S416 245 416 192S373 96 320 96ZM320 256C284.75 256 256 227.25 256 192S284.75 128 320 128S384 156.75 384 192S355.25 256 320 256ZM497.75 112L337.75 5.375C332.375 1.75 326.25 0 320 0S307.625 1.75 302.25 5.375L142.25 112C133.375 118 128 128 128 138.625V496C128 504.799 135.199 512 144 512S160 504.799 160 496V138.625L320 32L480 138.625V496C480 504.799 487.199 512 496 512S512 504.799 512 496V138.625C512 128 506.625 118 497.75 112ZM610.312 211.406L566.109 193.211C557.932 189.842 548.572 193.742 545.207 201.922C541.844 210.102 545.75 219.459 553.932 222.818L598.125 240.969C604.1 243.422 608 249.24 608 255.697V495.166C608 503.135 613.455 510.512 621.322 511.783C631.352 513.404 640 505.721 640 496V255.781C640 236.25 628.344 218.812 610.312 211.406Z" />
        </Icon>
    </>
}