import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorld.module.scss';
import * as strings from 'helloWorldStrings';
import { IHelloWorldWebPartProps } from './IHelloWorldWebPartProps';

// import component that allows loading external css
import { SPComponentLoader } from '@microsoft/sp-loader'; 

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {


  constructor() {
    super();

    // load bootstrap css
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'); 
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div class="${styles.container}">
        <div class="panel panel-default">
            <div class="panel-heading">Bootsrap Webpart</div>

            <div class="panel-body">
                <div class="row">
                   <div class="col-md-4">
                      <label class="control-label">Form Field</label>
                      <input type="text" class="form-control" />
                   </div>
                </div>
            </div>
        </div>
     </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
