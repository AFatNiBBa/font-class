
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wand-sparkles` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=light wand-sparkles}
 * @preview ![wand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTkuOTU1IDE5MS44NEM0MDguNzk5IDE5MS44NCA0MTUuOTU1IDE4NC42OCA0MTUuOTU1IDE3NS44MzJWMTQ3LjgyTDUwMy44NTYgNTIuMDg2QzUwMy44NzIgNTIuMDg2IDUwMy45MDMgNTIuMDU1IDUwMy45MTggNTIuMDIzQzUxNS4xMDYgMzkuNzAzIDUxNC42MzcgMjAuNzU4IDUwMi43NzggOC44NzVDNDkxLjM0IC0yLjQ3NyA0NzEuNzE3IC0zLjA3IDQ1OS42NyA3Ljg0NEwxODYuNjQxIDI1NS44NzVIMTQ0LjAxOEMxMzUuMTc0IDI1NS44NzUgMTI4LjAxOCAyNjMuMDMxIDEyOC4wMTggMjcxLjg4M1YzMDguNzczTDEwLjQ5NSA0MTQuODU5QzMuOTQ4IDQyMC43OTcgMC4yMjkgNDI4Ljk2MSAwLjAxIDQzNy43NDJDLTAuMjA5IDQ0Ni41NjIgMy4xMDQgNDU0Ljg3NSA5LjM1NCA0NjEuMTY0TDUwLjc4OSA1MDIuNjE3QzU2LjgzNCA1MDguNjU2IDY0Ljg2NiA1MTIgNzMuNDEzIDUxMkM4Mi41NTMgNTEyIDkwLjk3MyA1MDguMjgxIDk3LjE3NiA1MDEuNDYxTDM3Ni4zMzIgMTkxLjg0SDM5OS45NTVaTTM1Ny4zNDggMTY1LjEwOUw3My40MTMgNDc5Ljk4NEwzMS45NzcgNDM4LjU4NkwxNTQuNzE5IDMyNy44MTNDMTU4LjA5NCAzMjQuNzgxIDE2MC4wMTYgMzIwLjQzOCAxNjAuMDE2IDMxNS45MDJWMjg3Ljg5MUgxOTIuODExQzE5Ni43OCAyODcuODkxIDIwMC42MjMgMjg2LjQxOCAyMDMuNTYxIDI4My43M0w0NzQuNzggMzYuNDUzTDM4OC4xNzQgMTMwLjc4MUMzODUuNDU1IDEzMy43MTkgMzgzLjk1NyAxMzcuNTk0IDM4My45NTcgMTQxLjU5NFYxNTkuODI0SDM2OS4yMjNDMzY0LjY5MiAxNTkuODI0IDM2MC4zNzkgMTYxLjczNCAzNTcuMzQ4IDE2NS4xMDlaTTE2IDE2MEg2NFYyMDhDNjQgMjE2Ljg0NCA3MS4xNTcgMjI0IDgwIDIyNFM5NiAyMTYuODQ0IDk2IDIwOFYxNjBIMTQ0QzE1Mi44NDQgMTYwIDE2MCAxNTIuODQ0IDE2MCAxNDRTMTUyLjg0NCAxMjggMTQ0IDEyOEg5NlY4MEM5NiA3MS4xNTYgODguODQ0IDY0IDgwIDY0UzY0IDcxLjE1NiA2NCA4MFYxMjhIMTZDNy4xNTcgMTI4IDAgMTM1LjE1NiAwIDE0NFM3LjE1NyAxNjAgMTYgMTYwWk0xOTIgODBIMjI0VjExMkMyMjQgMTIwLjg0NCAyMzEuMTU3IDEyOCAyNDAgMTI4UzI1NiAxMjAuODQ0IDI1NiAxMTJWODBIMjg4QzI5Ni44NDQgODAgMzA0IDcyLjg0NCAzMDQgNjRTMjk2Ljg0NCA0OCAyODggNDhIMjU2VjE2QzI1NiA3LjE1NiAyNDguODQ0IDAgMjQwIDBTMjI0IDcuMTU2IDIyNCAxNlY0OEgxOTJDMTgzLjE1NyA0OCAxNzYgNTUuMTU2IDE3NiA2NFMxODMuMTU3IDgwIDE5MiA4MFpNNDk2IDM1Mkg0NDhWMzA0QzQ0OCAyOTUuMTU2IDQ0MC44NDQgMjg4IDQzMiAyODhTNDE2IDI5NS4xNTYgNDE2IDMwNFYzNTJIMzY4QzM1OS4xNTcgMzUyIDM1MiAzNTkuMTU2IDM1MiAzNjhTMzU5LjE1NyAzODQgMzY4IDM4NEg0MTZWNDMyQzQxNiA0NDAuODQ0IDQyMy4xNTcgNDQ4IDQzMiA0NDhTNDQ4IDQ0MC44NDQgNDQ4IDQzMlYzODRINDk2QzUwNC44NDQgMzg0IDUxMiAzNzYuODQ0IDUxMiAzNjhTNTA0Ljg0NCAzNTIgNDk2IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WandSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M399.955 191.84C408.799 191.84 415.955 184.68 415.955 175.832V147.82L503.856 52.086C503.872 52.086 503.903 52.055 503.918 52.023C515.106 39.703 514.637 20.758 502.778 8.875C491.34 -2.477 471.717 -3.07 459.67 7.844L186.641 255.875H144.018C135.174 255.875 128.018 263.031 128.018 271.883V308.773L10.495 414.859C3.948 420.797 0.229 428.961 0.01 437.742C-0.209 446.562 3.104 454.875 9.354 461.164L50.789 502.617C56.834 508.656 64.866 512 73.413 512C82.553 512 90.973 508.281 97.176 501.461L376.332 191.84H399.955ZM357.348 165.109L73.413 479.984L31.977 438.586L154.719 327.813C158.094 324.781 160.016 320.438 160.016 315.902V287.891H192.811C196.78 287.891 200.623 286.418 203.561 283.73L474.78 36.453L388.174 130.781C385.455 133.719 383.957 137.594 383.957 141.594V159.824H369.223C364.692 159.824 360.379 161.734 357.348 165.109ZM16 160H64V208C64 216.844 71.157 224 80 224S96 216.844 96 208V160H144C152.844 160 160 152.844 160 144S152.844 128 144 128H96V80C96 71.156 88.844 64 80 64S64 71.156 64 80V128H16C7.157 128 0 135.156 0 144S7.157 160 16 160ZM192 80H224V112C224 120.844 231.157 128 240 128S256 120.844 256 112V80H288C296.844 80 304 72.844 304 64S296.844 48 288 48H256V16C256 7.156 248.844 0 240 0S224 7.156 224 16V48H192C183.157 48 176 55.156 176 64S183.157 80 192 80ZM496 352H448V304C448 295.156 440.844 288 432 288S416 295.156 416 304V352H368C359.157 352 352 359.156 352 368S359.157 384 368 384H416V432C416 440.844 423.157 448 432 448S448 440.844 448 432V384H496C504.844 384 512 376.844 512 368S504.844 352 496 352Z" />
        </Icon>
    </>
}