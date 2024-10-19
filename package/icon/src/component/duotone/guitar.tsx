
import { Icon, generic } from "../../index";

/**
 * A component that renders the `guitar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guitar?s=duotone guitar}
 * @preview ![guitar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM0OC44NTcgMjY3LjY0M0MzNDUuNDgyIDI1My4wMjEgMzM4LjQ4MiAyMzkuNjU0IDMyOS43NCAyMjcuNTMxTDI5NS40OCAyNjEuNzkzQzI4OS4yMzIgMjY4LjA0MyAyNzkuMTAxIDI2OC4wNDMgMjcyLjg1MyAyNjEuNzkzTDI1MC4yMzIgMjM5LjE3QzI0My45ODQgMjMyLjkyMiAyNDMuOTg0IDIyMi43OTEgMjUwLjIzIDIxNi41NDNMMjg0LjQ5NiAxODIuMjc1TDI4NC40ODQgMTgyLjI2NEMyNzIuMzU5IDE3My41MTQgMjU4Ljk4OCAxNjYuNTEgMjQ0LjM2MyAxNjMuMTM3QzIxMC45ODggMTU1LjM4OSAxNzcuMzY1IDE2Mi4yNjIgMTU0LjQ5MiAxODUuMTM5QzE0NS4yNDQgMTk0LjUxNCAxMzguMjQyIDIwNi4wMTYgMTM0LjI0NCAyMTguNjQxQzEyOC4yNDQgMjM3LjE0MyAxMTEuMTE3IDI1MS4yNyA5Mi4xMTkgMjUzLjAyQzY4LjQ5OCAyNTUuMzk1IDQ2LjM3MyAyNjQuNTIgMjkuNSAyODEuNTIxQy0xNi4xMjEgMzI3LjAyMyAtNy44NzEgNDA5LjAyOSA0Ny42MjMgNDY0LjUzN0MxMDIuOTk2IDUxOS45MTQgMTg0Ljk5IDUyOC4wNDEgMjMwLjQ4OCA0ODIuNTM1QzI0Ny40ODYgNDY1LjY2IDI1Ni43MzYgNDQzLjY2IDI1OC45ODQgNDE5Ljc4M0MyNjAuNzM2IDQwMS4wMjkgMjc0Ljg1OSAzODMuNjU0IDI5My40ODQgMzc3LjY1MkMzMDUuOTgyIDM3My43NzcgMzE3LjQ4MiAzNjYuNzc3IDMyNi44NTcgMzU3LjQwMkMzNDkuNzMgMzM0LjUyNSAzNTYuNjA1IDMwMS4wMjMgMzQ4Ljg1NyAyNjcuNjQzWk0yMDcuOTkgMzUyLjAyNUMxODEuNDg4IDM1Mi4wMjkgMTU5Ljk5MiAzMzAuNTI1IDE1OS45OSAzMDQuMDIzQzE1OS45OTIgMjc3LjUyIDE4MS40OTIgMjU2LjAyIDIwNy45OSAyNTYuMDJDMjM0LjQ4OCAyNTYuMDE4IDI1NS45ODggMjc3LjUyIDI1NS45ODQgMzA0LjAyM0MyNTUuOTg2IDMzMC41MjMgMjM0LjQ4NiAzNTIuMDI5IDIwNy45OSAzNTIuMDI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODEuNTU3IDU2LjE1OUw0MjguMTk0IDkuMzlDNDQwLjY2NiAtMy4xMTggNDYwLjkyIC0zLjEzMiA0NzMuNDA5IDkuMzU4TDUwMy4wOTMgMzkuMDQ0QzUxNS41ODUgNTEuNTM2IDUxNS41NzIgNzEuNzk0IDUwMy4wNjQgODQuMjdMNDU2LjMwNiAxMzAuOTExQzQ1Mi41NTEgMTM0LjY1NyA0NDcuOTc2IDEzNy40NzcgNDQyLjk0MyAxMzkuMTQ5TDQwNi40NDYgMTUxLjI3NUwyOTUuOTM1IDI2MS43OTVDMjg5LjY4NyAyNjguMDQzIDI3OS41NTYgMjY4LjA0MyAyNzMuMzA4IDI2MS43OTVMMjUwLjY4NiAyMzkuMTcxQzI0NC40MzggMjMyLjkyMyAyNDQuNDM4IDIyMi43OTMgMjUwLjY4NiAyMTYuNTQ0TDM2MS4xOTYgMTA2LjAyM0wzNzMuMzIzIDY5LjUyQzM3NC45OTQgNjQuNDg4IDM3Ny44MTQgNTkuOTE0IDM4MS41NTcgNTYuMTU5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Guitar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M348.857 267.643C345.482 253.021 338.482 239.654 329.74 227.531L295.48 261.793C289.232 268.043 279.101 268.043 272.853 261.793L250.232 239.17C243.984 232.922 243.984 222.791 250.23 216.543L284.496 182.275L284.484 182.264C272.359 173.514 258.988 166.51 244.363 163.137C210.988 155.389 177.365 162.262 154.492 185.139C145.244 194.514 138.242 206.016 134.244 218.641C128.244 237.143 111.117 251.27 92.119 253.02C68.498 255.395 46.373 264.52 29.5 281.521C-16.121 327.023 -7.871 409.029 47.623 464.537C102.996 519.914 184.99 528.041 230.488 482.535C247.486 465.66 256.736 443.66 258.984 419.783C260.736 401.029 274.859 383.654 293.484 377.652C305.982 373.777 317.482 366.777 326.857 357.402C349.73 334.525 356.605 301.023 348.857 267.643ZM207.99 352.025C181.488 352.029 159.992 330.525 159.99 304.023C159.992 277.52 181.492 256.02 207.99 256.02C234.488 256.018 255.988 277.52 255.984 304.023C255.986 330.523 234.486 352.029 207.99 352.025Z" />
            <path d="M381.557 56.159L428.194 9.39C440.666 -3.118 460.92 -3.132 473.409 9.358L503.093 39.044C515.585 51.536 515.572 71.794 503.064 84.27L456.306 130.911C452.551 134.657 447.976 137.477 442.943 139.149L406.446 151.275L295.935 261.795C289.687 268.043 279.556 268.043 273.308 261.795L250.686 239.171C244.438 232.923 244.438 222.793 250.686 216.544L361.196 106.023L373.323 69.52C374.994 64.488 377.814 59.914 381.557 56.159Z" />
    </Icon>
);

export default Guitar;