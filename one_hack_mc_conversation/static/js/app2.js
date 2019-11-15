
var loginsJWTMap = {
     "alex": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3ODc1OTMsImp0aSI6ImI0MDUyZmMxLWU2MzItNDhlZC1iYjFjLWQ2NTM1MTFkMTVmNyIsImV4cCI6MTU3Mzg3Mzk5Mywic3ViIjoiYWxleCIsImFjbCI6eyJwYXRocyI6eyIvKi91c2Vycy8qKiI6e30sIi8qL2NvbnZlcnNhdGlvbnMvKioiOnt9LCIvKi9zZXNzaW9ucy8qKiI6e30sIi8qL2RldmljZXMvKioiOnt9LCIvKi9pbWFnZS8qKiI6e30sIi8qL21lZGlhLyoqIjp7fSwiLyovYXBwbGljYXRpb25zLyoqIjp7fSwiLyovcHVzaC8qKiI6e30sIi8qL2tub2NraW5nLyoqIjp7fX19LCJhcHBsaWNhdGlvbl9pZCI6IjBkZTUzM2ZmLWUzZDYtNGU4My04NjFiLTlhOTQ2M2IxNDQzZSJ9.zbxGCqxBBc6FWk5ni_cCp3cVRthBUADIpagBEM8wFl0vM_8T11pM_A4FBomhlXbnSAaNBgiQVss7VY4exvzOy2x4p3oHiSjd1eg2ZBlmAajiR-jXPeWuZzWx6Ek9KkTWvUdyCgHrSoB7ELRx1Y47INAwRC4Ag3fpFrAPggwAJ1oJsr5NmKQsabB1rnY_bR5Wh8m6QBPa4ZYR4LUopwdTmugWJduKedYMP6q3KxWY_jHd8hPYdGJUtYj_M8oPa3L95J4EOehn0aIEDM9-4Qu7AaiiohwwrrH8Xxb7JRPkiV77uYXgAOceImfYNur2MkuhijMw5thUXrYA_QDUIA2Bqg",
     "aurele":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3ODc3MDMsImp0aSI6ImIzZDUwZjYwLWNjNTEtNDM4MC04ZjhjLTZkN2IwYjg4NTdiZSIsImV4cCI6MTU3Mzg3NDEwMywic3ViIjoiYXVyZWxlIiwiYWNsIjp7InBhdGhzIjp7Ii8qL3VzZXJzLyoqIjp7fSwiLyovY29udmVyc2F0aW9ucy8qKiI6e30sIi8qL3Nlc3Npb25zLyoqIjp7fSwiLyovZGV2aWNlcy8qKiI6e30sIi8qL2ltYWdlLyoqIjp7fSwiLyovbWVkaWEvKioiOnt9LCIvKi9hcHBsaWNhdGlvbnMvKioiOnt9LCIvKi9wdXNoLyoqIjp7fSwiLyova25vY2tpbmcvKioiOnt9fX0sImFwcGxpY2F0aW9uX2lkIjoiMGRlNTMzZmYtZTNkNi00ZTgzLTg2MWItOWE5NDYzYjE0NDNlIn0.eNfLJXFi4s2Ad9AOU9vr-Y-Nxxqosl_ONoYwAHhJvryj5ZnGgihDn2xsFj_yJytsInklqseMlRJNfRaREKbQfngTeal3nzyFmBSNp7IaO_4t54bpu4ySvTb1Lxl-6e0pI9qiBu6nODKEA5eBHHQOJHZF_PgoxGohgOBmXIDPhStlU4QN_tqCxfjJc0v7PudeHdKjdgkOrQCek10w2j1q1_zq-8GP8MVEbKxdnkvsSGre3YrzF682h8Z_X7UMqtQR0FzVyA8OsaGHQUq6zay2Wc36FNMHnLXOex_WxTli8OCNCoynPxAV3Z7wnolpPn4EBHk8LaUC8WJNyQVSWTvtvw",
     "chris":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3ODc3MzgsImp0aSI6IjM5Yjg5NGEzLWM5N2EtNDJkZi1hMDgyLTRhNDc0NmRhYWNhOCIsImV4cCI6MTU3Mzg3NDEzOCwic3ViIjoiY2hyaXMiLCJhY2wiOnsicGF0aHMiOnsiLyovdXNlcnMvKioiOnt9LCIvKi9jb252ZXJzYXRpb25zLyoqIjp7fSwiLyovc2Vzc2lvbnMvKioiOnt9LCIvKi9kZXZpY2VzLyoqIjp7fSwiLyovaW1hZ2UvKioiOnt9LCIvKi9tZWRpYS8qKiI6e30sIi8qL2FwcGxpY2F0aW9ucy8qKiI6e30sIi8qL3B1c2gvKioiOnt9LCIvKi9rbm9ja2luZy8qKiI6e319fSwiYXBwbGljYXRpb25faWQiOiIwZGU1MzNmZi1lM2Q2LTRlODMtODYxYi05YTk0NjNiMTQ0M2UifQ.j3WH-E_-IZ_VStnUCMHYCrBOuIgYRsDPeNzZjEr5hTVOjprThrmDAjh6JfAnwHiB6jc8pjQJzV8_c_w5A3AYZrfvmIaNaJ0-0BATUXnCaY5I5dt_q-fjTJRIkaHoopQ9ZPZDU-IAZo-sSexSI7IeOAhW-qHjNSL_u-l2wL9QJP6PIjDLyPxrNzUJ_qECcovhKGUj_H4pknP6yRqxUOeBeKG4X7wYi152KAp-S0yWRyBGoXknt5ttH56fIzMJtywE-a7Zrsjd26EC3HKeymOTawIBFj-xFkEta739ZvXVj-Jd7b3vyozrlwNERvwHyEvTFoUY9joP-L_lfXdj9FP5UA",
     "yannick":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM3ODc4NjUsImp0aSI6ImY1YTllYjhmLTU5MjItNGIzNC05NTA4LWRiNjE2YTc3NTdjNyIsImV4cCI6MTU3Mzg3NDI2NSwic3ViIjoieWFubmljayIsImFjbCI6eyJwYXRocyI6eyIvKi91c2Vycy8qKiI6e30sIi8qL2NvbnZlcnNhdGlvbnMvKioiOnt9LCIvKi9zZXNzaW9ucy8qKiI6e30sIi8qL2RldmljZXMvKioiOnt9LCIvKi9pbWFnZS8qKiI6e30sIi8qL21lZGlhLyoqIjp7fSwiLyovYXBwbGljYXRpb25zLyoqIjp7fSwiLyovcHVzaC8qKiI6e30sIi8qL2tub2NraW5nLyoqIjp7fX19LCJhcHBsaWNhdGlvbl9pZCI6IjBkZTUzM2ZmLWUzZDYtNGU4My04NjFiLTlhOTQ2M2IxNDQzZSJ9.ckEo4UOb1z6kH-QrlpVFCo_F583yvajRUTkVcGcwFPRcaV3Yl34eCpRncJUvEOWZqNGNSq1p5Gf9Qo9CA7uxFod102SLaFw6uPisEaE8b8FZ4psvge1kRzKb5HRB9oPJYQa9c7Q3ZxzCAwB5Ztb0ap8vlk72CUsCyQgdePF3MNdYsOG5rUvxur7nRhEhJVc4wrWdkt6UoWl6BHT0rJrpInbi_FhJFJnK0y3NPmvrNAt8gz3m9Kur-Q3jvHiUTPE-Y8XqgSyr93xLfIJyTffl9WVOBBko3JsbQ_TRTVFmYZItQ_oBrpVBqsF2sCteQDB886L8dT_iBV68Ux6ZzQ-YqQ"
 };

var userName = '';
var displayName = 'ChrisDisplay';
var conversationId = 'CON-37f8d55c-f7b0-40c2-b907-c8e84e7736a2';
var clientToken = "";

var chat_client = '';

var config = {
  debug: 'debug',
  url: "wss://ws.nexmo.com",
  nexmo_api_url: "https://api.nexmo.com",
  ips_url: "https://api.dev.nexmoinc.net/play4/v1/image",
  sync: 'full',
  rtcstats: {
    emit_events: false
  },
  log_reporter: { enabled: false },
  screenShareExtensionId: 'hfphhlplpbadncioadkiapbhdcjkkneo'
};
var client = new NexmoClient(config);

function login_button(name) {
  var jwt = loginsJWTMap[name];
  client.login(jwt);

  userName = name;
  clientToken = jwt;
  chat_client = new ChatApp()
}

function call_button(name) {
  client.application.inAppCall(name.split(","));
}

function answer_button() {
  client.application.calls.forEach((call) => {
    call.answer()
  })
}

function mute_button() {
  client.application.calls.forEach((call) => {
    call.conversation.me.mute(true)
  })
}

function unmute_button() {
  client.application.calls.forEach((call) => {
    call.conversation.me.mute(false)
  })
}
