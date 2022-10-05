/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Terms & Conditions</h5>
      <div class="card-text">
        <p>
          
          1. The information on this bot has been included in good faith for general informational purposes only. The bot may contain information submitted by a third party including adverts.

        </p>
        <p>
          
          2. The information should not be relied upon for any specific purpose and no representation or warranty is given as to its accuracy or completeness.

        </p>
        <p>
          
          3. Any opinions (express or implied) are those of the AI Bot based on the structured code by Infermedica.
        </p>
        <p>
          
          4. Do not use make copies of the AI Bot. Developer source code available from official site of Infermedica.

        </p>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> 
          Click on <span class="badge badge-primary">Next</span> button below to get started.
        </p>
      </div>
    `);
  });
};

export default template;
