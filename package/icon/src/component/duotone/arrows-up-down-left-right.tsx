
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down-left-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down-left-right?s=duotone arrows-up-down-left-right}
 * @preview ![arrows-up-down-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4NCAxMzZDMTkyLjE4OCAxMzYgMjAwLjM3NSAxMzIuODc1IDIwNi42MjUgMTI2LjYyNUwyMjQgMTA5LjI1VjIyNEgyODhWMTA5LjI1TDMwNS4zNzUgMTI2LjYyNUMzMTEuNjI1IDEzMi44NzUgMzE5LjgxMiAxMzYgMzI4IDEzNkMzNDYuMjc5IDEzNiAzNjAgMTIxLjA1MyAzNjAgMTA0QzM2MCA5NS44MTIgMzU2Ljg3NSA4Ny42MjUgMzUwLjYyNSA4MS4zNzVMMjc4LjYyNSA5LjM3NUMyNzIuMzc1IDMuMTI1IDI2NC4xODggMCAyNTYgMFMyMzkuNjI1IDMuMTI1IDIzMy4zNzUgOS4zNzVMMTYxLjM3NSA4MS4zNzVDMTU1LjEyNSA4Ny42MjUgMTUyIDk1LjgxMiAxNTIgMTA0QzE1MiAxMjEuMDUzIDE2NS43MzEgMTM2IDE4NCAxMzZaTTMyOCAzNzZDMzE5LjgxMiAzNzYgMzExLjYyNSAzNzkuMTI1IDMwNS4zNzUgMzg1LjM3NUwyODggNDAyLjc1VjI4OEgyMjRWNDAyLjc1TDIwNi42MjUgMzg1LjM3NUMyMDAuMzc1IDM3OS4xMjUgMTkyLjE4OCAzNzYgMTg0IDM3NkMxNjUuNzIxIDM3NiAxNTIgMzkwLjk0NyAxNTIgNDA4QzE1MiA0MTYuMTg4IDE1NS4xMjUgNDI0LjM3NSAxNjEuMzc1IDQzMC42MjVMMjMzLjM3NSA1MDIuNjI1QzIzOS42MjUgNTA4Ljg3NSAyNDcuODEyIDUxMiAyNTYgNTEyUzI3Mi4zNzUgNTA4Ljg3NSAyNzguNjI1IDUwMi42MjVMMzUwLjYyNSA0MzAuNjI1QzM1Ni44NzUgNDI0LjM3NSAzNjAgNDE2LjE4OCAzNjAgNDA4QzM2MCAzOTAuOTQ3IDM0Ni4yNjkgMzc2IDMyOCAzNzZaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgMjU2QzUxMiAyNjQuMTg4IDUwOC44NzUgMjcyLjM3NSA1MDIuNjI1IDI3OC42MjVMNDMwLjYyNSAzNTAuNjI1QzQyNC4zNzUgMzU2Ljg3NSA0MTYuMTg4IDM2MCA0MDggMzYwQzM4OS43MjEgMzYwIDM3NiAzNDUuMDUzIDM3NiAzMjhDMzc2IDMxOS44MTIgMzc5LjEyNSAzMTEuNjI1IDM4NS4zNzUgMzA1LjM3NUw0MDIuNzUgMjg4SDEwOS4yNUwxMjYuNjI1IDMwNS4zNzVDMTMyLjg3NSAzMTEuNjI1IDEzNiAzMTkuODEyIDEzNiAzMjhDMTM2IDM0NS4wNTMgMTIyLjI2OSAzNjAgMTA0IDM2MEM5NS44MTIgMzYwIDg3LjYyNSAzNTYuODc1IDgxLjM3NSAzNTAuNjI1TDkuMzc1IDI3OC42MjVDMy4xMjUgMjcyLjM3NSAwIDI2NC4xODggMCAyNTZTMy4xMjUgMjM5LjYyNSA5LjM3NSAyMzMuMzc1TDgxLjM3NSAxNjEuMzc1Qzg3LjYyNSAxNTUuMTI1IDk1LjgxMiAxNTIgMTA0IDE1MkMxMjIuMjc5IDE1MiAxMzYgMTY2Ljk0NyAxMzYgMTg0QzEzNiAxOTIuMTg4IDEzMi44NzUgMjAwLjM3NSAxMjYuNjI1IDIwNi42MjVMMTA5LjI1IDIyNEg0MDIuNzVMMzg1LjM3NSAyMDYuNjI1QzM3OS4xMjUgMjAwLjM3NSAzNzYgMTkyLjE4OCAzNzYgMTg0QzM3NiAxNjYuOTQ3IDM4OS43MzEgMTUyIDQwOCAxNTJDNDE2LjE4OCAxNTIgNDI0LjM3NSAxNTUuMTI1IDQzMC42MjUgMTYxLjM3NUw1MDIuNjI1IDIzMy4zNzVDNTA4Ljg3NSAyMzkuNjI1IDUxMiAyNDcuODEyIDUxMiAyNTZaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
const ArrowsUpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M184 136C192.188 136 200.375 132.875 206.625 126.625L224 109.25V224H288V109.25L305.375 126.625C311.625 132.875 319.812 136 328 136C346.279 136 360 121.053 360 104C360 95.812 356.875 87.625 350.625 81.375L278.625 9.375C272.375 3.125 264.188 0 256 0S239.625 3.125 233.375 9.375L161.375 81.375C155.125 87.625 152 95.812 152 104C152 121.053 165.731 136 184 136ZM328 376C319.812 376 311.625 379.125 305.375 385.375L288 402.75V288H224V402.75L206.625 385.375C200.375 379.125 192.188 376 184 376C165.721 376 152 390.947 152 408C152 416.188 155.125 424.375 161.375 430.625L233.375 502.625C239.625 508.875 247.812 512 256 512S272.375 508.875 278.625 502.625L350.625 430.625C356.875 424.375 360 416.188 360 408C360 390.947 346.269 376 328 376Z " />
            <path d="M512 256C512 264.188 508.875 272.375 502.625 278.625L430.625 350.625C424.375 356.875 416.188 360 408 360C389.721 360 376 345.053 376 328C376 319.812 379.125 311.625 385.375 305.375L402.75 288H109.25L126.625 305.375C132.875 311.625 136 319.812 136 328C136 345.053 122.269 360 104 360C95.812 360 87.625 356.875 81.375 350.625L9.375 278.625C3.125 272.375 0 264.188 0 256S3.125 239.625 9.375 233.375L81.375 161.375C87.625 155.125 95.812 152 104 152C122.279 152 136 166.947 136 184C136 192.188 132.875 200.375 126.625 206.625L109.25 224H402.75L385.375 206.625C379.125 200.375 376 192.188 376 184C376 166.947 389.731 152 408 152C416.188 152 424.375 155.125 430.625 161.375L502.625 233.375C508.875 239.625 512 247.812 512 256Z " />
    </Icon>
);

export default ArrowsUpDownLeftRight;