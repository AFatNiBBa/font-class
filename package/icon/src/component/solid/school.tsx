
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `school` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=solid school}
 * @preview ![school](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTU5Ljk3OUgzMzZWMTQzLjk3N0MzMzYgMTM1LjE3NiAzMjguODAxIDEyNy45NzcgMzIwIDEyNy45NzdTMzA0IDEzNS4xNzYgMzA0IDE0My45NzdWMTc1Ljk3OUMzMDQgMTg0Ljc3OSAzMTEuMjAxIDE5MS45OCAzMjAuMDAyIDE5MS45OEgzNTJDMzYwLjgwMSAxOTEuOTggMzY4IDE4NC43NzkgMzY4IDE3NS45OFYxNzUuOTc5QzM2OCAxNjcuMTc4IDM2MC44MDEgMTU5Ljk3OSAzNTIgMTU5Ljk3OVpNMCAyNDcuMDU5VjQ4MEMwIDQ5Ny42NzMgMTQuMzI3IDUxMiAzMiA1MTJIOTZWMTkxLjk4TDIxLjg3NSAyMTYuNzAzQzguODExIDIyMS4wNiAwIDIzMy4yODcgMCAyNDcuMDU5Wk02MTguMTI1IDIxNi43MDNMNTQ0IDE5MS45OFY1MTJINjA4QzYyNS42NzMgNTEyIDY0MCA0OTcuNjczIDY0MCA0ODBWMjQ3LjA1OUM2NDAgMjMzLjI4NyA2MzEuMTg5IDIyMS4wNiA2MTguMTI1IDIxNi43MDNaTTQ5Ny43NSAxMTEuOTc1TDMzNy43NSA1LjM0NEMzMjcuMDAxIC0xLjgyIDMxMi45OTkgLTEuODIgMzAyLjI1IDUuMzQ0TDE0Mi4yNSAxMTEuOTc1QzEzMy4zNzUgMTE3Ljk3NSAxMjggMTI3Ljk3NyAxMjggMTM4LjYwMlY1MTJIMjU2VjM4My45OUMyNTYgMzY2LjMxNyAyNzAuMzI3IDM1MS45OSAyODggMzUxLjk5SDM1MkMzNjkuNjczIDM1MS45OSAzODQgMzY2LjMxNyAzODQgMzgzLjk5VjUxMkg1MTJWMTM4LjYwMkM1MTIgMTI3Ljk3NyA1MDYuNjI1IDExNy45NzUgNDk3Ljc1IDExMS45NzVaTTMyMCAyNTUuOTg0QzI3NS44NzUgMjU1Ljk4NCAyNDAgMjIwLjEwNyAyNDAgMTc1Ljk3OUMyNDAgMTMxLjg1MiAyNzUuODc1IDk1Ljk3NSAzMjAgOTUuOTc1UzQwMCAxMzEuODUyIDQwMCAxNzUuOTc5QzQwMCAyMjAuMTA3IDM2NC4xMjUgMjU1Ljk4NCAzMjAgMjU1Ljk4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function School(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M352 159.979H336V143.977C336 135.176 328.801 127.977 320 127.977S304 135.176 304 143.977V175.979C304 184.779 311.201 191.98 320.002 191.98H352C360.801 191.98 368 184.779 368 175.98V175.979C368 167.178 360.801 159.979 352 159.979ZM0 247.059V480C0 497.673 14.327 512 32 512H96V191.98L21.875 216.703C8.811 221.06 0 233.287 0 247.059ZM618.125 216.703L544 191.98V512H608C625.673 512 640 497.673 640 480V247.059C640 233.287 631.189 221.06 618.125 216.703ZM497.75 111.975L337.75 5.344C327.001 -1.82 312.999 -1.82 302.25 5.344L142.25 111.975C133.375 117.975 128 127.977 128 138.602V512H256V383.99C256 366.317 270.327 351.99 288 351.99H352C369.673 351.99 384 366.317 384 383.99V512H512V138.602C512 127.977 506.625 117.975 497.75 111.975ZM320 255.984C275.875 255.984 240 220.107 240 175.979C240 131.852 275.875 95.975 320 95.975S400 131.852 400 175.979C400 220.107 364.125 255.984 320 255.984Z" />
        </Icon>
    </>
}