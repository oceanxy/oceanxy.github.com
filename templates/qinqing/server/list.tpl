 <div class="server-total">

  <p><b>服务总数</b> <span>{{transactNum.service}}</span></p>
  <p><b>车牌办理数</b> <span>{{transactNum.licensePlate}}</span></p>
  <p><b>驾驶证办理数</b> <span>{{transactNum.driversLicense}}</span></p>
  <p><b>身份证办理数</b> <span>{{transactNum.identityCard}}</span></p>

</div>

<div class="pass-check">
  <div class="common-title">各类通行证办理数量</div>
  <ul class="pass-check-list">
     {{#each passCheck}}
        {{#compare i 0}}
          <li><b>{{name}}</b><i></i> <span>{{value}}</span></li>
        {{/compare}}

        {{#compare i 1}}
           <li><span>{{value}}</span><b>{{name}}</b><i></i></li>
        {{/compare}}

    {{/each}}
  </ul>
</div>
 