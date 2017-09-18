<!-- {{#each this}}
<li>
    <span class="count-name">{{name}}</span>
    <span class="count-number">
        {{#each valueArr}}
        <em>{{this}}</em>
        {{/each}}
    </span>
</li>
{{/each}} -->

<li>
    <span class="count-name">机动车总数</span>
     <span class="count-number">
        {{#each motorVehicle}}
          <em>{{this}}</em>
        {{/each}}
    </span>
</li>

<li>
    <span class="count-name">网约车总数</span>
    <span class="count-number">
        {{#each networkCar}}
          <em>{{this}}</em>
        {{/each}}
    </span>
</li>

<li>
    <span class="count-name">重点车总数</span>
    <span class="count-number">
        {{#each keyCar}}
          <em>{{this}}</em>
        {{/each}}
    </span>
</li>

<li>
    <span class="count-name">货车总数</span>
    <span class="count-number">
        {{#each truck}}
          <em>{{this}}</em>
        {{/each}}
    </span>
</li>

<li>
    <span class="count-name">货船总数</span>
    <span class="count-number">
        {{#each cargoShip}}
          <em>{{this}}</em>
        {{/each}}
    </span>
</li>

<li>
    <span class="count-name">客船总数</span>
    <span class="count-number">
        {{#each passengerShip}}
        <em>{{this}}</em>
        {{/each}}
    </span>
</li>