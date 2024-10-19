
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=duotone podium-star}
 * @preview ![podium-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4IDE5Mkw3Ny4xMTggNDgzLjE4NEM3OC43NTQgNDk5LjU0MyA5Mi41MiA1MTIgMTA4Ljk2IDUxMkgzMzkuMDRDMzU1LjQ4IDUxMiAzNjkuMjQ2IDQ5OS41NDMgMzcwLjg4MiA0ODMuMTg0TDQwMCAxOTJINDhaTTMwNC41MTggMzI2Ljc1NkwyNzEuNTE4IDM1OC44ODFMMjc5LjI2OCA0MDQuMzgxQzI4MC43NjggNDEyLjYzMSAyNzIuMTQzIDQxOC43NTYgMjY0Ljc2OCA0MTQuODgxTDIyNC4wMTggMzkzLjM4MUwxODMuMjY4IDQxNC44ODFDMTc2LjAxOCA0MTguNzU2IDE2Ny4yNjggNDEyLjYzMSAxNjguNzY4IDQwNC4zODFMMTc2LjUxOCAzNTguODgxTDE0My41MTggMzI2Ljc1NkMxMzcuNjQzIDMyMC44ODEgMTQwLjc2OCAzMTAuNzU2IDE0OS4wMTggMzA5LjYzMUwxOTQuNjQzIDMwMi44ODFMMjE1LjAxOCAyNjEuNTA2QzIxOC43NjggMjU0LjAwNiAyMjkuMjY4IDI1NC4xMzEgMjMyLjg5MyAyNjEuNTA2TDI1My4yNjggMzAyLjg4MUwyOTguODkzIDMwOS42MzFDMzA3LjE0MyAzMTAuNzU2IDMxMC4zOTMgMzIwLjg4MSAzMDQuNTE4IDMyNi43NTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5OC44OTMgMzA5LjYzMUwyNTMuMjY4IDMwMi44ODFMMjMyLjg5MyAyNjEuNTA2QzIyOS4yNjggMjU0LjEzMSAyMTguNzY4IDI1NC4wMDYgMjE1LjAxOCAyNjEuNTA2TDE5NC42NDMgMzAyLjg4MUwxNDkuMDE4IDMwOS42MzFDMTQwLjc2OCAzMTAuNzU2IDEzNy42NDMgMzIwLjg4MSAxNDMuNTE4IDMyNi43NTZMMTc2LjUxOCAzNTguODgxTDE2OC43NjggNDA0LjM4MUMxNjcuMjY4IDQxMi42MzEgMTc2LjAxOCA0MTguNzU2IDE4My4yNjggNDE0Ljg4MUwyMjQuMDE4IDM5My4zODFMMjY0Ljc2OCA0MTQuODgxQzI3Mi4xNDMgNDE4Ljc1NiAyODAuNzY4IDQxMi42MzEgMjc5LjI2OCA0MDQuMzgxTDI3MS41MTggMzU4Ljg4MUwzMDQuNTE4IDMyNi43NTZDMzEwLjM5MyAzMjAuODgxIDMwNy4xNDMgMzEwLjc1NiAyOTguODkzIDMwOS42MzFaTTQyNCAxNDRIMTI3LjM3NUMxMzMuNzUgMTEzLjEyNSAxNTguMTI1IDg4Ljc1IDE5MC4xMjUgODIuMDAxQzE5OC43NSA5MC42MjUgMjEwLjc1IDk2IDIyNCA5NkwyODYuMTk3IDk2QzMwOS40MSA5NiAzMzAuNjk5IDgwLjMxNCAzMzUuMDgzIDU3LjUxOUMzNDAuOTgyIDI2Ljg0OCAzMTcuNjEzIDAgMjg4IDBIMjI0QzIwMiAwIDE4My41IDE1IDE3Ny44NzUgMzUuMjVDMTI1Ljg3NSA0Ni44NzUgODYuMTI1IDkwLjI1IDc5LjM3NSAxNDRIMjRDMTAuNzQ1IDE0NCAwIDE1NC43NDUgMCAxNjhWMTY4QzAgMTgxLjI1NSAxMC43NDUgMTkyIDI0IDE5Mkg0MjRDNDM3LjI1NSAxOTIgNDQ4IDE4MS4yNTUgNDQ4IDE2OFYxNjhDNDQ4IDE1NC43NDUgNDM3LjI1NSAxNDQgNDI0IDE0NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 192L77.118 483.184C78.754 499.543 92.52 512 108.96 512H339.04C355.48 512 369.246 499.543 370.882 483.184L400 192H48ZM304.518 326.756L271.518 358.881L279.268 404.381C280.768 412.631 272.143 418.756 264.768 414.881L224.018 393.381L183.268 414.881C176.018 418.756 167.268 412.631 168.768 404.381L176.518 358.881L143.518 326.756C137.643 320.881 140.768 310.756 149.018 309.631L194.643 302.881L215.018 261.506C218.768 254.006 229.268 254.131 232.893 261.506L253.268 302.881L298.893 309.631C307.143 310.756 310.393 320.881 304.518 326.756Z" />
            <path d="M298.893 309.631L253.268 302.881L232.893 261.506C229.268 254.131 218.768 254.006 215.018 261.506L194.643 302.881L149.018 309.631C140.768 310.756 137.643 320.881 143.518 326.756L176.518 358.881L168.768 404.381C167.268 412.631 176.018 418.756 183.268 414.881L224.018 393.381L264.768 414.881C272.143 418.756 280.768 412.631 279.268 404.381L271.518 358.881L304.518 326.756C310.393 320.881 307.143 310.756 298.893 309.631ZM424 144H127.375C133.75 113.125 158.125 88.75 190.125 82.001C198.75 90.625 210.75 96 224 96L286.197 96C309.41 96 330.699 80.314 335.083 57.519C340.982 26.848 317.613 0 288 0H224C202 0 183.5 15 177.875 35.25C125.875 46.875 86.125 90.25 79.375 144H24C10.745 144 0 154.745 0 168V168C0 181.255 10.745 192 24 192H424C437.255 192 448 181.255 448 168V168C448 154.745 437.255 144 424 144Z" />
    </Icon>
);

export default PodiumStar;