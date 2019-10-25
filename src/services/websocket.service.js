import { openWebsocket, onMessageWebSocket, closeWebsocket } from '../store/actions/app';

export function ws_connect(data, dispatch) {
   const ws = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_URL}`);
   const machineList = data;
   let macUuids = [];
   const collectUuid = (arr) => {
       let macUuids = [];
       for(let i=0; i< arr.length; i++){
           if(arr[i].Machines && Array.isArray(arr[i].Machines))
           {
               macUuids = macUuids.concat(collectUuid(arr[i].Machines))
           }
           else {
               macUuids.push(arr[i].MachineUuid)
           }
       }
       return macUuids;
   }
   
   ws.onopen = () => {
       // send machine uuids, otherwise no data back in message
       // relative to backend 
       macUuids = collectUuid(machineList);

       if(macUuids.length > 0)
       {
           ws.send(JSON.stringify(macUuids));
           dispatch(openWebsocket());
           console.log(`ws connected`);
       }else{
           dispatch(closeWebsocket());
           console.log(`Ws didn't received macUuids.`)
       }
   }

   ws.onmessage = (evt) => {
       if(evt) {
           dispatch(onMessageWebSocket(JSON.parse(evt.data)));
       }
   }

   ws.onclose = (e) => {
       dispatch(closeWebsocket());
       console.log(`ws closed`);
   }
}

