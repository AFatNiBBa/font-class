
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-word` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-word?s=light cloud-word}
 * @preview ![cloud-word](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzUySDI3MkMyNjMuMTY0IDM1MiAyNTYgMzU5LjE2MiAyNTYgMzY4QzI1NiAzNzYuODM2IDI2My4xNjQgMzg0IDI3MiAzODRIMzY4QzM3Ni44MzYgMzg0IDM4NCAzNzYuODM2IDM4NCAzNjhDMzg0IDM1OS4xNjIgMzc2LjgzNiAzNTIgMzY4IDM1MlpNMjg4IDMwNEMyODggMjk1LjE2MiAyODAuODM2IDI4OCAyNzIgMjg4SDE0NEMxMzUuMTY0IDI4OCAxMjggMjk1LjE2MiAxMjggMzA0QzEyOCAzMTIuODM2IDEzNS4xNjQgMzIwIDE0NCAzMjBIMjcyQzI4MC44MzYgMzIwIDI4OCAzMTIuODM2IDI4OCAzMDRaTTIwOCAzNTJIMTc2QzE2Ny4xNjQgMzUyIDE2MCAzNTkuMTYyIDE2MCAzNjhDMTYwIDM3Ni44MzYgMTY3LjE2NCAzODQgMTc2IDM4NEgyMDhDMjE2LjgzNiAzODQgMjI0IDM3Ni44MzYgMjI0IDM2OEMyMjQgMzU5LjE2MiAyMTYuODM2IDM1MiAyMDggMzUyWk00NjQgMzUySDQzMkM0MjMuMTY0IDM1MiA0MTYgMzU5LjE2MiA0MTYgMzY4QzQxNiAzNzYuODM2IDQyMy4xNjQgMzg0IDQzMiAzODRINDY0QzQ3Mi44MzYgMzg0IDQ4MCAzNzYuODM2IDQ4MCAzNjhDNDgwIDM1OS4xNjIgNDcyLjgzNiAzNTIgNDY0IDM1MlpNNTcxLjc1IDIzOC43NUM1NzQuNSAyMjguODU5IDU3NiAyMTguNjI1IDU3NiAyMDhDNTc2IDE0Ni4xMDkgNTI1Ljg3NSA5NiA0NjQgOTZDNDQ3LjI1IDk2IDQzMS4xMjUgOTkuNjA5IDQxNiAxMDYuNzVDMzg0LjM3NSA2MS43NjYgMzMxLjc1IDMyIDI3MiAzMkMxNzcuNjI1IDMyIDEwMC4yNSAxMDYuNSA5Ni4yNSAyMDAuMjVDMzkuMjUgMjIwLjI1IDAgMjc0LjIzNCAwIDMzNkMwIDQxNS42MDkgNjQuMzc1IDQ4MCAxNDQgNDgwSDUxMkM1ODIuNzUgNDgwIDY0MCA0MjIuNzUgNjQwIDM1MkM2NDAgMzA1IDYxNC4yNSAyNjEuMjUgNTcxLjc1IDIzOC43NVpNNTA3LjU2MiA0NDhIMTQ5LjQ2OUM5MS4xNTYgNDQ4IDM4LjU2MiA0MDUuODI4IDMyLjU5NCAzNDcuODQ0QzI2Ljc4MSAyOTEuMjAzIDYzLjI1IDI0MS45NTMgMTE0LjI4MSAyMjcuOTY5QzEyMi42MjUgMjI1LjcwMyAxMjguMDYyIDIxNy43MzQgMTI4IDIwOS4wNjJWMjA4LjA2MkMxMjggMTQ3LjM1OSAxNjUuMTI1IDkxLjM5MSAyMjIuNzE5IDcyLjIxOUMyOTQuMTg3IDQ4LjQyMiAzNjEuOTA2IDc4LjkzNyAzOTUgMTMzLjEyNUM0MDEgMTQyLjkwNiA0MTMuMzc1IDE0NS4xMjUgNDIzLjIxOSAxMzkuMjM0QzQ0MC4xMjUgMTI5LjE1NiA0NjEuMDMxIDEyNS4xNTYgNDgzLjE1NiAxMzAuMjM0QzUxMCAxMzYuMzkxIDUzMi41OTQgMTU3LjI1IDU0MC40MDYgMTgzLjY1NkM1NDYuMjE5IDIwMy4yNjYgNTQ0Ljc1IDIyMi40MDYgNTM3LjkwNiAyMzguODEyQzUzMy43ODEgMjQ4Ljc5NyA1MzkuOTY5IDI1OS41NDcgNTQ5Ljg3NSAyNjMuODEyQzU4Ny4yMTkgMjc5Ljc4MSA2MTIuMzEyIDMxOC44NzUgNjA3LjQwNiAzNjMuMDQ3QzYwMS44NzUgNDEyLjMxMiA1NTcuMTU2IDQ0OCA1MDcuNTYyIDQ0OFpNNDk2IDI4Ny45OThIMzM2QzMyNy4xNjQgMjg3Ljk5OCAzMjAgMjk1LjE2MiAzMjAgMzAzLjk5OEMzMjAgMzEyLjgzNiAzMjcuMTY0IDMxOS45OTggMzM2IDMxOS45OThINDk2QzUwNC44MzYgMzE5Ljk5OCA1MTIgMzEyLjgzNiA1MTIgMzAzLjk5OEM1MTIgMjk1LjE2MiA1MDQuODM2IDI4Ny45OTggNDk2IDI4Ny45OThaIi8+PC9zdmc+|width=32|height=32)
 */
const CloudWord: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 352H272C263.164 352 256 359.162 256 368C256 376.836 263.164 384 272 384H368C376.836 384 384 376.836 384 368C384 359.162 376.836 352 368 352ZM288 304C288 295.162 280.836 288 272 288H144C135.164 288 128 295.162 128 304C128 312.836 135.164 320 144 320H272C280.836 320 288 312.836 288 304ZM208 352H176C167.164 352 160 359.162 160 368C160 376.836 167.164 384 176 384H208C216.836 384 224 376.836 224 368C224 359.162 216.836 352 208 352ZM464 352H432C423.164 352 416 359.162 416 368C416 376.836 423.164 384 432 384H464C472.836 384 480 376.836 480 368C480 359.162 472.836 352 464 352ZM571.75 238.75C574.5 228.859 576 218.625 576 208C576 146.109 525.875 96 464 96C447.25 96 431.125 99.609 416 106.75C384.375 61.766 331.75 32 272 32C177.625 32 100.25 106.5 96.25 200.25C39.25 220.25 0 274.234 0 336C0 415.609 64.375 480 144 480H512C582.75 480 640 422.75 640 352C640 305 614.25 261.25 571.75 238.75ZM507.562 448H149.469C91.156 448 38.562 405.828 32.594 347.844C26.781 291.203 63.25 241.953 114.281 227.969C122.625 225.703 128.062 217.734 128 209.062V208.062C128 147.359 165.125 91.391 222.719 72.219C294.187 48.422 361.906 78.937 395 133.125C401 142.906 413.375 145.125 423.219 139.234C440.125 129.156 461.031 125.156 483.156 130.234C510 136.391 532.594 157.25 540.406 183.656C546.219 203.266 544.75 222.406 537.906 238.812C533.781 248.797 539.969 259.547 549.875 263.812C587.219 279.781 612.312 318.875 607.406 363.047C601.875 412.312 557.156 448 507.562 448ZM496 287.998H336C327.164 287.998 320 295.162 320 303.998C320 312.836 327.164 319.998 336 319.998H496C504.836 319.998 512 312.836 512 303.998C512 295.162 504.836 287.998 496 287.998Z" />
    </Icon>
);

export default CloudWord;