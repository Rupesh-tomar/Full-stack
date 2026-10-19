const H = document.createElement("h2");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");
H.textContent="Sub Heading";

P.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis soluta ipsam accusantium animi quia eveniet, dolorem exercitationem ut iure adipisci architecto at laboriosam sint et maiores reiciendis. Quasi quis a error consequatur cupiditate? Iste aliquid quae enim et tempora? Labore error illo, aliquam iure, quis delectus aliquid soluta ea officia excepturi eos blanditiis. Numquam quae ex, accusamus dolorum architecto vero natus odit delectus, nihil earum, dolor itaque sint esse minima? Incidunt reprehenderit quaerat fugit cum, accusamus ratione aliquam molestiae perspiciatis voluptates ab quae harum voluptatum quia sint. Rerum deleniti molestias veritatis explicabo in odio beatae, sed, repellat soluta eveniet atque reiciendis placeat quae labore aliquam magni non? Debitis dolorum fugiat libero porro voluptatum, incidunt excepturi, magni dolore fuga eos cupiditate maxime, id suscipit commodi repellendus nisi ipsam! Vero natus dolore quia, odio aliquid laboriosam alias iusto, ullam magni possimus vitae, voluptatibus architecto totam in voluptatem atque et nobis nihil. Nobis vitae repellat consequatur. At, architecto beatae illo repellat eligendi expedita dolorum inventore rem blanditiis labore mollitia quis, voluptatem molestias error excepturi? Unde, aperiam nisi. Repudiandae officia omnis praesentium provident libero, velit iste ab aliquid maiores. Inventore voluptatem laudantium cupiditate quasi totam sed dolore, dolorum voluptas, nulla rem vitae itaque!"

const div = document.getElementById("task");
B.classList.add("btn","btn-primary");
B.innerText="submit";

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append(H.innerText);