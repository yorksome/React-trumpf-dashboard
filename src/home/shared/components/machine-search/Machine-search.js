import React from 'react';
import './Machine-search.scss';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

class MachineSearch extends React.Component {
   componentDidMount() {

   }

   render() {
      const { machineList, wsCall } = this.props;
      const machines = machineList.map(item => item.Machines);
      const getMachineStatus = (socketArray, index) => {
         let url = '/images/status_';
         if(socketArray.length > 0) {
            switch(socketArray[index].Status) {
               case 0: return `${url}inPause.jpg`;
               case 1: return `${url}running.jpg`;
               case 2: return `${url}offline.jpg`;
               case 3: return `${url}error.jpg`;
               default: return `${url}offline.jpg`;
            }
         } else {
            return `${url}offline.jpg`;
         }
      }
      

      if( machines && machines.length>0 && wsCall && wsCall.length>0) {
         let data = [
            {
               Name: 'Trubend1066',
               Id: 'B1023J2221',
               MachineUuid: '30ader-56derer-cdfafa-jklji88'
            },
            {
               Name: 'Trulaser3030',
               Id: 'A1022J1011',
               MachineUuid: '30ader-56derer-cdfafa-jklji88'
            }
         ];
         return (
            <div className='machine-search-container'>
                  {/* <InfiniteScroll
                     initialLoad= {false}
                     pageStart= {0}
                     loadMore= {()=>{}}
                     hasMore= {true}
                     useWindow= {false}
                  > */}
                     <List
                       dataSource= {data}
                       renderItem= {(item,index) => (
                          <List.item key={item.MachineUuid}>
                              <List.Item.Meta 
                              //   avatar={<Avatar src={getMachineStatus(wsCall, index)}/>}
                                avatar={<Avatar src={`/images/status_offline.jpg`} />}
                                title={item.Name}
                                description={item.Id}
                              />
                          </List.item>
                       )}
                     >
                        <div>Content</div>
                     </List>
                  {/* </InfiniteScroll> */}
            </div>
         );
      }
      else {
         return null;
      }
   }
}

export default MachineSearch;